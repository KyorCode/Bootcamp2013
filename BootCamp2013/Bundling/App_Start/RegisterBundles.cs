using System.Reflection;
using Bundling.App_Start;
using WebActivatorEx;

[assembly: PostApplicationStartMethod(typeof(RegisterBundleFactory), "Register")]
namespace Bundling.App_Start
{
    public static class RegisterBundleFactory
    {
        public static void Register()
        {
            var container = WindsorContainerFactory.GetContainer(Assembly.GetExecutingAssembly());
            var bundleFactory = container.Resolve<IBundleFactory>();
            bundleFactory.Init();
        }
    }
}