using System.Data;
using DevSnippets.Application.Features.Technologies.DTOs;
using FluentValidation;

namespace DevSnippets.Application.Features.Technologies.Validators;

public class CreateTechnologyValidator : AbstractValidator<CreateTechnologyRequestDto>
{
    public CreateTechnologyValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().MinimumLength(1).WithMessage("El nombre de la tecnología no puede estar vacío.")
            .MaximumLength(50).WithMessage("El nombre de la tecnología es demasiado largo.");
        RuleFor(x => x.Description)
            .MaximumLength(200).WithMessage("La descripción de la tecnología es demasiado larga.");
    }
}