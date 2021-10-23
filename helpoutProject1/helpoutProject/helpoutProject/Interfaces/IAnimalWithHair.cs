using System;
using System.Collections.Generic;
using System.Text;

namespace helpoutProject.Interfaces
{
    public interface IAnimalWithHair : IAnimal
    {
        int GetHairCount();

        void AddHair(int amount);
    }
}
