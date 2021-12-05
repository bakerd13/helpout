using helphoutApi.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace helphoutApi.DTOs
{
    public class CustomerOrderLine
    {
        public int CustomerOrderID { get; internal set; }
        public int LineNumber { get; internal set; }
        public int Quantity { get; internal set; }
        public string ItemCode { get; internal set; }
        public string Description { get; internal set; }
        public string RangeDescription { get; internal set; }
        public bool IsDataDirty { get; internal set; }
        public ServiceAction ServiceAction { get; internal set; }
    }
}
