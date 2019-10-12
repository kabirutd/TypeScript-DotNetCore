using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TypeScriptProject1.Models;

namespace TypeScriptProject1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult VowelCounter()
        {
            return View();
        }
        public IActionResult Anagram()
        {
            return View();
        }
        public IActionResult CapitalizeSentence()
        {
            return View();
        }
        public IActionResult ReverseInt()
        {
            return View();
        }
        public IActionResult MaxChar()
        {
            return View();
        }
        public IActionResult ReverseString()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
