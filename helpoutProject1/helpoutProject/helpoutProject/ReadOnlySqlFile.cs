using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace helpoutProject
{
    public class ReadOnlySqlFile : SqlFile
    {
        public string FilePath { get; set; }
        public string FileText { get; set; }
        public string LoadText()
        {
            return "ReadOnlySqlFile Load Text";
        }

        public string SaveText()
        {
            /* Throw an exception when app flow tries to do save. */
            throw new IOException("Can't Save");
        }
    }
}
