using DevSnippets.Domain.Entities;

namespace DevSnippets.Application.Interfaces;

public interface ITechnologyRepository
{
    Task<IEnumerable<Technology>> GetAllAsync();
    Task<Technology?> GetByIdAsync(int id);
    Task<Technology> AddAsync(Technology technology);
    Task<int> UpdateAsync(Technology technology);
    Task<int> DeleteAsync(Technology technology);
}