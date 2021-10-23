using helpoutProject.Interfaces;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace helpoutProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            //IDog dog = new Dog();

            // var hair = dog;


            //await NewMethod();
            //NewMethod1();

            //delatge
            //Action
            //Func
            //Predicate

            //var cat = new Cat();
            //cat.Add("Dog", () => Console.WriteLine("Dog"));
            //cat.Add("Cat", () => Console.WriteLine("Cat"));
            //cat.Add("Hamster", () => NewMethod());

            //cat.Get("Dog");
            //cat.Get("Cat");
            //cat.Get("Hamster");

            var dog = new Dog();
            var t = dog.Get();

            Console.ReadKey();
        }

        private static void NewMethod()
        {
            Console.WriteLine("Hamster");
        }

        private static void NewMethod1()
        {
            var files = new SqlFileManager();
            var file1 = new SqlFile();
            var file2 = new ReadOnlySqlFile();

            files.lstSqlFiles = new List<SqlFile>();
            files.lstSqlFiles.Add(file1);
            files.lstSqlFiles.Add(file2);

            files.GetTextFromFiles();
            files.SaveTextIntoFiles();
        }

        //private static async Task NewMethod()
        //{
        //    var http = new HttpClient();

        //    var response = await http.SendAsync();
        //}
    }
}
