using helpoutProject.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace helpoutProject
{
    public class Cat
    {
        public Dictionary<string, Action> AnimalList { get; private set; } = new Dictionary<string, Action>();

        public void Add(string name, Action action)
        {
            AnimalList.Add(name, action);
        }

        public void Get(string name)
        {
            //if (arr.Contains("Dog"))
            //{
            //    Console.WriteLine("Dog");
            //}
            //else if (arr.Contains("Cat"))
            //{
            //    Console.WriteLine("Cat");
            //}
            //else if (arr.Contains("Hamster"))
            //{
            //    Console.WriteLine("Hamster");
            //}

            var action = AnimalList[name];
            action();
        }
    }
}
