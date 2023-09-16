using APIAppTest.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin", policy =>
    {
        policy
              .AllowAnyHeader()
              .SetIsOriginAllowed((host) => true)
              .AllowAnyMethod()
              .AllowCredentials();
        
    });
});

var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapHub<DropChatHub>("/dropChat");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAnyOrigin");
app.MapControllers();
app.Run();
