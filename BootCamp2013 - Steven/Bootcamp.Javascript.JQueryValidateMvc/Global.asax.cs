using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Bootcamp.Javascript.JQueryValidateMvc
{
	public class Application : HttpApplication
	{
		protected void Application_Start()
		{
			RegisterGlobalFilters(GlobalFilters.Filters);
			RegisterRoutes(RouteTable.Routes);
			RegisterViewEngines();
		}

		protected void Application_Error()
		{
			// Prevent IIS 7.x from display its own custom error pages.
			// http://www.west-wind.com/weblog/posts/745738.aspx
			Response.TrySkipIisCustomErrors = true;
		}

		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}

		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
			routes.IgnoreRoute("{*favicon}", new { favicon = @"(.*/)?favicon.ico(/.*)?" });

			AreaRegistration.RegisterAllAreas();

			routes.MapRoute(
				 "Default", // Route name
				 "{controller}/{action}/{id}", // URL with parameters
				 new { controller = "Home", action = "Index", id = UrlParameter.Optional }, // Parameter defaults
				 new[] { "Bootcamp.Javascript.JQueryValidateMvc.Controllers" }
			);
		}

		private static void RegisterViewEngines()
		{
			ViewEngines.Engines.Clear();
			ViewEngines.Engines.Add(new RazorViewEngine());
		}
	}
}
