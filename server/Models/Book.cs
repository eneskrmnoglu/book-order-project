using System;
using System.ComponentModel.DataAnnotations;

namespace BookOrderApi.Models
{
    public class Book
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; }
        public string? Genre { get; set; }
        public string? Author { get; set; }
        public decimal? Price { get; set; }
        public string? Img {get; set;}
    }
}