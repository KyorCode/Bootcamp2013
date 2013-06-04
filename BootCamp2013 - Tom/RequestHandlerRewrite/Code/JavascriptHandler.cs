using System.IO;
using System.Text.RegularExpressions;
using System.Web;

namespace RequestHandlerRewrite.Code
{
    public class JavascriptHandler : IHttpHandler
    {
        private const string urlRegex = @"(^|.*/)Scripts/([a-zA-Z0-9]+)\.(\d+)\.js";

        public bool IsReusable { get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            var response = context.Response;
            var request = context.Request;

            var url = request.AppRelativeCurrentExecutionFilePath.Substring(2);
            var urlMatch = Regex.Match(url, urlRegex, RegexOptions.None);

            if (!urlMatch.Success)
                WriteFile(response, request, request.AppRelativeCurrentExecutionFilePath);
            else
            {
                var cleansedUrl = "~/Scripts/" + urlMatch.Groups[2].Value + ".js";
                WriteFile(response, request, cleansedUrl);
            }
        }

        private static void WriteFile(HttpResponse response, HttpRequest request, string virtualPath)
        {
            var filePath = GetRealLocation(request, virtualPath);
            if (filePath != null && File.Exists(filePath))
            {
                response.ContentType = "application/javascript";
                response.WriteFile(Path.GetFileName(filePath));
            }
            else
                Return404(response);
        }

        private static void Return404(HttpResponse response)
        {
            response.Clear();
            response.StatusCode = 404;
            response.End();
        }

        private static string GetRealLocation(HttpRequest request, string virtualPath)
        {
            return request.MapPath(virtualPath);
        }

    }
}