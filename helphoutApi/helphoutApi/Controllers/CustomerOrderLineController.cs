using helphoutApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json.Linq;
using helphoutApi.DTOs;
using helphoutApi.Enums;
using System.Text;

namespace SeaWebPortal.Server.Controllers
{
    /// <summary>
    /// Functionality for the customer order line api controller
    /// </summary>
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CustomerOrderLineController : ControllerBase
    {
        private readonly ILogger<CustomerOrderLineController> _logger;
        private readonly ICustomerOrderService _customerOrderService;
        private readonly IMembershipService _membershipService;

        /// <summary>
        /// Constructor for the customer order lines
        ///  lines, get order lines and post order lines.
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="customerOrderService"></param>
        /// <param name="membershipService"></param>
        public CustomerOrderLineController(ILogger<CustomerOrderLineController> logger, ICustomerOrderService customerOrderService, IMembershipService membershipService)
        {
            _logger = logger;
            _customerOrderService = customerOrderService ?? throw new ArgumentNullException(nameof(customerOrderService));
            _membershipService = membershipService ?? throw new ArgumentNullException(nameof(membershipService));
        }

        /// <summary>
        /// Get a customer order line by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //[HttpGet("{id}")]
        //public async Task<CustomerOrderLine> Get(long id)
        //{
        //    TODO set up getter in service
        //    var result = await _customerOrderService.GetCustomerOrderLineAsync(id, Guid.NewGuid());

        //    return result;
        //}

        /// <summary>
        /// Save a customer order line item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> Post([FromBody]CustomerOrderLine orderItem)
        {
            //[FromBody] CustomerOrderLine customerOrderLine
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                string message = await reader.ReadToEndAsync();

                JObject jObject = JObject.Parse(message);

                CustomerOrderLine orderLine = new CustomerOrderLine();
                orderLine.CustomerOrderID = (int)jObject["customerOrderID"];
                orderLine.LineNumber = (int)jObject["lineNumber"];
                orderLine.Quantity = (int)jObject["quantity"];
                orderLine.ItemCode = (string)jObject["itemCode"];
                orderLine.Description = (string)jObject["description"];
                orderLine.RangeDescription = (string)jObject["rangeDescription"];
                orderLine.ServiceAction = ServiceAction.Add;
                orderLine.IsDataDirty = false;

                var result = await _customerOrderService.SaveCustomerOrderLineAsync(orderLine, Guid.NewGuid());

                return Content(result.ToString());
            }
        }
    }
}
