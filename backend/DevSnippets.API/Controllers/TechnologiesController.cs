using DevSnippets.Application.Features.Technologies.DTOs;
using DevSnippets.Application.Interfaces;
using DevSnippets.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using FluentValidation;

namespace DevSnippets.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TechnologiesController : ControllerBase
{
    private readonly ITechnologyRepository _repository;
    private readonly IValidator<CreateTechnologyRequestDto> _validator;

    public TechnologiesController(ITechnologyRepository repository, IValidator<CreateTechnologyRequestDto> validator)
    {
        _repository = repository;
        _validator = validator;
    }

    [HttpGet]
    public async Task<IActionResult> GetTechnologies()
    {
        var technologies = await _repository.GetAllAsync();

        var response = technologies.Select(h => new TechnologyResponseDto
        {
            Id = h.Id,
            Name = h.Name,
            Description = h.Description
        });
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTechnology([FromBody] CreateTechnologyRequestDto request)
    {
        var validationResult = await _validator.ValidateAsync(request);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var newTechnology = new Technology
        {
            Name = request.Name,
            Description = request.Description
        };

        var createdTechnology = await _repository.AddAsync(newTechnology);

        var response = new TechnologyResponseDto
        {
            Id = createdTechnology.Id,
            Name = createdTechnology.Name,
            Description = createdTechnology.Description
        };

        return CreatedAtAction(nameof(GetTechnologies), new { id = response.Id }, response);
    }
}