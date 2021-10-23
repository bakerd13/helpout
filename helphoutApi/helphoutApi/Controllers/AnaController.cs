using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mime;
using System.Threading;
using System.Threading.Tasks;

namespace helphoutApi.Controllers
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]
    [Consumes(MediaTypeNames.Application.Json)]
    public class AnaController : ControllerBase
    {
        [HttpGet]
        [Route("/black")]
        /// <summary>
        /// Get a list
        /// </summary>
        /// <returns>a string</returns>
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<string>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(Exception))]
        public IActionResult GetAna(CancellationToken cancel)
        {
            var test = new List<string> { "test" };
            return Ok(test);
        }

        [HttpGet]
        [Route("/white")]
        /// <summary>
        /// Get a list
        /// </summary>
        /// <returns>a string</returns>
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<string>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(Exception))]
        public async IActionResult GetAna2([FromQuery] string request)
        {
            var test = new List<string> { "test" };
            await Task.Delay(1000);
            test.Add(request);

            return Ok(test);
        }

        [HttpPost]
        [Route("/green")]
        /// <summary>
        /// Get a list
        /// </summary>
        /// <returns>a string</returns>
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<string>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(Exception))]
        public IActionResult GetAna3([FromBody] string request)
        {
            var test = new List<string> { "test" };
            test.Add(request);

            if (request != "ana")
            {
                return BadRequest("only ana is allowed.");
            }

            return Ok(test);
        }
    }
}
