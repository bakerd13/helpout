using helphoutApi.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace helphoutApi.Services
{
    public class CustomerOrderService : ICustomerOrderService
    {
        public Task<bool> SaveCustomerOrderLineAsync(CustomerOrderLine orderLine, Guid id)
        {
            return Task.FromResult(true);
        }
    }
}
