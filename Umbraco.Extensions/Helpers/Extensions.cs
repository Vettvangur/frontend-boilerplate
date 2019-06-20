using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Umbraco.Extensions.Helpers
{
    public static class Extensions
    {
        public static bool IsStaging(this HtmlHelper htmlHelper)
        {
            return Settings.Current.IsStaging;
        }
        public static bool IsProd(this HtmlHelper htmlHelper)
        {
            return Settings.Current.IsProd;
        }
    }
}
