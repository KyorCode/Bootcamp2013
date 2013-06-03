using System.Web.Optimization;
using Bundling.App_Start;
using WebActivatorEx;

[assembly: PostApplicationStartMethod(typeof(RegisterBundles), "Register")]
namespace Bundling.App_Start
{
    public static class RegisterBundles
    {
        public static void Register()
        {
            var bundles = BundleTable.Bundles;
            PrepareIgnoreList(bundles);
            AddStyleBundles(bundles);
            AddScriptBundles(bundles);

            BundleTable.EnableOptimizations = true;
        }

        private static void PrepareIgnoreList(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            AddDefaultIgnorePatterns(bundles.IgnoreList);
        }

        private static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
        {
            if (ignoreList == null)
                return;

            ignoreList.Ignore("*.intellisense.js");
            ignoreList.Ignore("*-vsdoc.js");
            ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
        }
        
        private static void AddStyleBundles(BundleCollection bundles)
        {
            var appStyle = new StyleBundle("~/Content/app")
                .Include("~/Content/app/MainStyle.css");

            bundles.Add(appStyle);
        }

        private static void AddScriptBundles(BundleCollection bundles)
        {
            var jqueryBundle = new ScriptBundle("~/Scripts/lib/jquery")
                .Include("~/Scripts/lib/jquery/jquery-{version}.js");
            
            //var jqueryBundle = new ScriptBundle("~/Scripts/lib/jquery",
            //                                    "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js")
            //    .Include("~/Scripts/lib/jquery/jquery-{version}.js");

            var appLibBundle = new ScriptBundle("~/Scripts/app/lib")
                .Include("~/Scripts/app/Main.js")
                .Include("~/Scripts/app/Presenter.js");

            bundles.Add(jqueryBundle);
            bundles.Add(appLibBundle);
        }
    }
}