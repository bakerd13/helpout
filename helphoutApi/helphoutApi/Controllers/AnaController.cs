using helphoutApi.Attributes;
using Microsoft.AspNetCore.Authorization;
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
    [Route("geek")]
    public class AnaController : ControllerBase
    {
        [HttpGet]
        [Route("black")]
        [Authorize]
        /// <summary>
        /// Get a list
        /// </summary>
        /// <param name="cancel">Cancalltion token</param>
        /// <returns>a string</returns>
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<string>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(Exception))]
        public IActionResult GetAna(CancellationToken cancel)
        {
            var test = new List<string> { "test" };
            return Ok(test);
        }

        [HttpGet]
        [Route("white")]
        /// <summary>
        /// Get a list
        /// </summary>
        /// <returns>a string</returns>
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<string>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(Exception))]
        public async Task<IActionResult> GetAna2([FromQuery] string request)
        {
            var test = new List<string> { "test" };
            await Task.Delay(1000);
            test.Add(request);

            //var t1 = true;

            //if (t1)
            //{
            //    TestT1(t1);
            //    return Ok(test);
            //}

            return Ok(test);
        }

        //private IActionResult TestT1(bool t1)
        //{
        //    if (!t1)
        //    {
        //        return BadRequest();
        //    }
        //    return Ok();
        //}

        [HttpPost]
        [Route("green")]
        [AnaAuth]
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
