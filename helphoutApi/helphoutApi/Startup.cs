using helphoutApi.Extensions;
using helphoutApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace helphoutApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.AddControllers();

            services.AddControllers()
                .ConfigureApiBehaviorOptions(options =>
                {
                    options.SuppressModelStateInvalidFilter = true;
                })
                .AddJsonOptions(options =>
                {
                    //options.JsonSerializerOptions.Converters.Add(new DateTimeToUtcConverter());
                    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
                    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "helphoutApi", Version = "v1" });
            });

            services.AddScoped<IMembershipService, MembershipService>();
            services.AddScoped<ICustomerOrderService, CustomerOrderService>();


            var key = Encoding.ASCII.GetBytes("qwertyuiopasdfghjklzxcvbnm123456");

            //services.AddAuthentication(option =>
            //{
            //    option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            //}).AddJwtBearer(options =>
            //{
            //        options.SaveToken = true;
            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuer = false,
            //            ValidateAudience = false,
            //            ValidateIssuerSigningKey = true,
            //            ValidateLifetime = false,
            //            IssuerSigningKey = new SymmetricSecurityKey(key),
            //        };
            //    });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "helphoutApi v1"));
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
