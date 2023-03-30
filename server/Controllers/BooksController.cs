using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookOrderApi.Data;
using BookOrderApi.Models;

namespace BookOrderApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
{
private readonly BookOrderApiContext _context;
public BooksController(BookOrderApiContext context)
{
    _context = context;
}

// GET: api/Books
[HttpGet]
public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
{
    return await _context.Books.ToListAsync();
}

// GET: api/Books/{id}
[HttpGet("{id}")]
public async Task<ActionResult<Book>> GetBook(Guid id)
{
    var book = await _context.Books.FindAsync(id);

    if (book == null)
    {
        return NotFound();
    }

    return book;
}

// POST: api/Books
[HttpPost]
public async Task<ActionResult<Book>> CreateBook([FromBody] Book book)
{
    if (book == null)
    {
        return BadRequest("Book object is null");
    }

    _context.Books.Add(book);
    await _context.SaveChangesAsync();

    return CreatedAtAction("GetBook", new { id = book.Id }, book);
}

// PUT: api/Books/{id}
[HttpPut("{id}")]
public async Task<IActionResult> UpdateBook(Guid id, [FromBody] Book book)
{
    if (id != book.Id)
    {
        return BadRequest();
    }

    _context.Entry(book).State = EntityState.Modified;

    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!BookExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }

    return NoContent();
}

private bool BookExists(Guid id)
{
    return _context.Books.Any(e => e.Id == id);
}


// DELETE: api/Books/{id}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteBook(Guid id)
{
    var book = await _context.Books.FindAsync(id);
    if (book == null)
    {
        return NotFound();
    }

    _context.Books.Remove(book);
    await _context.SaveChangesAsync();

    return NoContent();
}
}



}

