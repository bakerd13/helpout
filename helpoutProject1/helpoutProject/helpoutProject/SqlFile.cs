using System;
using System.Collections.Generic;
using System.Text;

namespace helpoutProject
{
    public class SqlFile
    {
        public string FilePath { get; set; }
        public string FileText { get; set; }
        public string LoadText()
        {
            Console.WriteLine("Loading file");
            return "Loading file";
        }
        public string SaveText()
        {
            Console.WriteLine("Save file");
            return "Save file";
        }
    }
}
