using helphoutApi.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace helphoutApi.Services
{
    public interface ICustomerOrderService
    {
        Task<bool> SaveCustomerOrderLineAsync(CustomerOrderLine orderLine, Guid id);
    }
}
