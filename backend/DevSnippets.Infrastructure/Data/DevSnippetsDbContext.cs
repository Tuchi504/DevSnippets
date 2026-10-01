using DevSnippets.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DevSnippets.Infrastructure.Data;

public class DevSnippetsDbContext : DbContext
{
    public DevSnippetsDbContext(DbContextOptions<DevSnippetsDbContext> options) : base(options) { }
    
    public DbSet<Technology> Technologies { get; set; }
}