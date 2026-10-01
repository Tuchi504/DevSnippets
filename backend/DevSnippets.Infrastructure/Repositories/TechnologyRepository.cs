using DevSnippets.Application.Interfaces;
using DevSnippets.Domain.Entities;
using DevSnippets.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DevSnippets.Infrastructure.Repositories;

public class TechnologyRepository : ITechnologyRepository
{
    private readonly DevSnippetsDbContext _context;

    public TechnologyRepository(DevSnippetsDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Technology>> GetAllAsync()
    {
        return await _context.Technologies.ToListAsync();
    }

    public async Task<Technology> AddAsync(Technology technology)
    {
        await _context.Technologies.AddAsync(technology);

        await _context.SaveChangesAsync();

        return technology;
    }
}