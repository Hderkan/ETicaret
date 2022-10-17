using ETicaretAPI.Application.Abstractions;
using ETicaretAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Persistence.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts()
            => new()
            {
                new() { Id = Guid.NewGuid(), Name = "Product1", CreatedDate = DateTime.Now , Price =100 , Stock = 10 },  

                new() { Id = Guid.NewGuid(), Name = "Product2", CreatedDate = DateTime.Now , Price =200 , Stock = 10 }, 
                
                new() { Id = Guid.NewGuid(), Name = "Product3", CreatedDate = DateTime.Now , Price =300 , Stock = 10 },  
                
                new() { Id = Guid.NewGuid(), Name = "Product4", CreatedDate = DateTime.Now , Price =400 , Stock = 10 }, 
                
                new() { Id = Guid.NewGuid(), Name = "Product5", CreatedDate = DateTime.Now , Price =500 , Stock = 10 }
            };
       
    }
}
