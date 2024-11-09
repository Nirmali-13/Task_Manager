using Microsoft.EntityFrameworkCore;
using TaskManager.Entities;

namespace TaskManager.Data
{
    public class TaskContext:DbContext
    {
        public TaskContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; } 
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.Tasks)
                .WithOne(p => p.Assignee)
                .HasForeignKey(u => u.AssigneeId);

            modelBuilder.Entity<User>()
                .HasOne(a => a.Address)
                .WithOne(b => b.User)
                .HasForeignKey<Address>(c => c.UserId);

            modelBuilder.Entity<TaskItem>()
                .HasMany(a => a.CheckList)
                .WithOne(b => b.Task)
                .HasForeignKey(o => o.TaskId);                                                                                                                          
            base.OnModelCreating(modelBuilder);
        }

    }
}
