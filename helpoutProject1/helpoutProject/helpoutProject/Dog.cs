using helpoutProject.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace helpoutProject
{
    public class Dog
    {
        private readonly ICat _cat;

        public Dog(ICat cat)
        {
            _cat = cat;
        }
        //public int Legs => throw new NotImplementedException();

        //public void AddHair(int amount)
        //{
        //    throw new NotImplementedException();
        //}

        //public void AddLeg(int number)
        //{
        //    throw new NotImplementedException();
        //}

        //public int GetHairCount()
        //{
        //    throw new NotImplementedException();
        //}

        //public int GetLegs()
        //{
        //    throw new NotImplementedException();
        //}
        public BullDog Get()
        {
            return new BullDog();
        }
    }
}
