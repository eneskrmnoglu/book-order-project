using Microsoft.Extensions.Configuration;
using BookOrderApi.Data;
using Microsoft.EntityFrameworkCore;
using Stripe;
using Microsoft.Extensions.Options;
using YourNamespace.Controllers;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BookOrderApiContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BookOrderApiConnection")));

builder.Services.Configure<StripeOptions>(builder.Configuration.GetSection("Stripe"));
builder.Services.AddSingleton(x => new StripeClient(x.GetRequiredService<IOptions<StripeOptions>>().Value.SecretKey));





builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(); 

app.UseAuthorization();

app.MapControllers();

app.Run();
