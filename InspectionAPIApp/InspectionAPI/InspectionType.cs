﻿//Ilaina avy amin'ny fampiasana ny [StringLength()]
using System.ComponentModel.DataAnnotations;

namespace InspectionAPI
{
    public class InspectionType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string InspectionName { get; set; } = String.Empty;
    }
}
