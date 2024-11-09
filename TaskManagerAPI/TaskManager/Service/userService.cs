using TaskManager.Dtos;
using TaskManager.Entities;
using TaskManager.Irepository;
using TaskManager.Iservice;

namespace TaskManager.Service
{
    public class userService :IuserService
    {
        private readonly IuserRepository _userRepository;
        

        public userService(IuserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        //public async Task<string> AddUser(UserRequest userRequest)
        //{
        //  var user = await _userRepository.Get
        //}


    }
}
