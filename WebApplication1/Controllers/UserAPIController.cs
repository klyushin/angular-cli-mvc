using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJSON(UserDB.TblUsers.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody] TblUser value)
        {
            UserDB.TblUsers.Add(value);
            return ToJSON(UserDB.SaveChanges());
        }


        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJSON(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id, [FromBody]TblUser value)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJSON(UserDB.SaveChanges());
        }

    }
}
