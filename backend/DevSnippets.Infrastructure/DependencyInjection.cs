using DevSnippets.Application.Interfaces;
using DevSnippets.Infrastructure.Data;
using DevSnippets.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DevSnippets.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<DevSnippetsDbContext>(options =>
            options.UseNpgsql(connectionString));

        services.AddScoped<ITechnologyRepository, TechnologyRepository>();

        return services;
    }
}