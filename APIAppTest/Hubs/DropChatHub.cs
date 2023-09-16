using Microsoft.AspNetCore.SignalR;

namespace APIAppTest.Hubs
{
    public class DropChatHub: Hub
    {
        public async Task SendMessage(string user, string drop)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, drop);
        }
    }
}
