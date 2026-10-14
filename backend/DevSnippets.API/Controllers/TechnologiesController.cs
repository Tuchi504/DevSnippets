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
    private readonly IValidator<CreateTechnologyRequestDto> _createValidator;
    private readonly IValidator<UpdateTechnologyRequestDto> _updateValidator;

    public TechnologiesController(
        ITechnologyRepository repository,
        IValidator<CreateTechnologyRequestDto> createValidator,
        IValidator<UpdateTechnologyRequestDto> updateValidator)
    {
        _repository = repository;
        _createValidator = createValidator;
        _updateValidator = updateValidator;
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

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetTechnologyById([FromRoute] int id)
    {
        var technology = await _repository.GetByIdAsync(id);

        if (technology == null)
        {
            return NotFound($"La tecnología de ID {id} no existe.");
        }

        var response = new TechnologyResponseDto()
        {
            Id = technology.Id,
            Name = technology.Name,
            Description = technology.Description
        };
        
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTechnology([FromBody] CreateTechnologyRequestDto request)
    {
        var validationResult = await _createValidator.ValidateAsync(request);
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

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateTechnology(
        [FromRoute] int id,
        [FromBody] UpdateTechnologyRequestDto request)
    {
        var validationResult = await _updateValidator.ValidateAsync(request);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var technologyToUpdate = await _repository.GetByIdAsync(id);

        if (technologyToUpdate == null)
        {
            return NotFound($"No existe la tecnología con ID {id}");
        }
        
        technologyToUpdate.Name = request.Name;
        technologyToUpdate.Description = request.Description;
        
        var affectedRows = await _repository.UpdateAsync(technologyToUpdate);

        if (affectedRows == 0)
        {
            return StatusCode(500, "No se pudo actualizar la tecnología o los datos eran idénticos.");
        }

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteTechnology([FromRoute] int id)
    {
        var technologyToDelete = await _repository.GetByIdAsync(id);

        if (technologyToDelete == null)
        {
            return NotFound($"La tecnología de ID {id} no existe o ya fue borrada.");
        }

        var affectedRows = await _repository.DeleteAsync(technologyToDelete);

        if (affectedRows == 0)
        {
            return StatusCode(500, "No se pudo borrar la tecnología.");
        }

        return NoContent();
    }
}