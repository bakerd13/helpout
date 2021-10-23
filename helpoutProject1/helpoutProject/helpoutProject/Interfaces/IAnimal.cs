using System;
using System.Collections.Generic;
using System.Text;

namespace helpoutProject.Interfaces
{
    public interface IAnimal
    {
        int Legs { get; }

        int GetLegs();

        void AddLeg(int number);

    }
}
