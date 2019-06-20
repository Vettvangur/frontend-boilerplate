using System;
using System.Web.Configuration;
using CommonServiceLocator;

namespace Umbraco.Extensions
{
    public class Settings
    {
        /// <summary>
        /// Current dependency resolver instance
        /// </summary>
        public static IServiceLocator container;
        public static Settings Current => container.GetInstance<Settings>();
        public enum Env
        {
            Debug,
            Staging,
            Prod,
        }
        public static Env Environment
        {
            get
            {
                var value = WebConfigurationManager.AppSettings["Umbraco.Environment"];
                Env result;

                Enum.TryParse<Env>(value, out result);

                return result;
            }
        }
        public const string ConnectionStringName = "umbracoDbDSN";
        public virtual bool IsDebug { get; } = Environment == Env.Debug ? true : false;
        public virtual bool IsStaging { get; } = Environment == Env.Staging ? true : false;
        public virtual bool IsProd { get; } = Environment == Env.Prod ? true : false;
    }
}
