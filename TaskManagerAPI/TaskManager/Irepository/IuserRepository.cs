using TaskManager.Entities;

namespace TaskManager.Irepository
{
    public interface IuserRepository
    {
        Task<User> AddUser(User user);
    }
}
