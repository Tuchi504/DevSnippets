using DevSnippets.Domain.Entities;

namespace DevSnippets.Application.Interfaces;

public interface ITechnologyRepository
{
    Task<IEnumerable<Technology>> GetAllAsync();
    Task<Technology> AddAsync(Technology technology);
}