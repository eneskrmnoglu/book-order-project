using Microsoft.EntityFrameworkCore;
using BookOrderApi.Models;

namespace BookOrderApi.Data
{
    public class BookOrderApiContext : DbContext
    {
        public BookOrderApiContext(DbContextOptions<BookOrderApiContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}