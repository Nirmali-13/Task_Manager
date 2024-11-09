using TaskManager.Data;
using TaskManager.Entities;
using TaskManager.Irepository;

namespace TaskManager.Repository
{
    public class userRepository:IuserRepository
    {
        private readonly TaskContext _context;

        public userRepository(TaskContext context)
        {
            _context = context;
        }
        public async Task<User> AddUser(User user)
        {
            var data = await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return data.Entity;
        }
    }
}
