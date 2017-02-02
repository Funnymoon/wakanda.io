/*
 * Headline typing effect configuration
 */

$(function() {
    var options = {
      stringsElement: $('#typed-strings'),
      startDelay: 1500,
      backDelay: 1000,
      typeSpeed: 0
    }
    $(".typed-text").typed(options);
});

/*
 * Download Community Edition links configuration
 */

var versionCommunityLink = { 
    stable: "1.1.3",
    preview: "2.0.1"
};

var baseCommunityLink = "https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/";

function partialCommunityLink(stableOrPreview, allOrServer) { 
    return baseCommunityLink+"v"+versionCommunityLink[stableOrPreview]+"/wakanda-community-"+allOrServer+"_"+versionCommunityLink[stableOrPreview]+"_";
}

function communityLinks(stableOrPreview) {
    return {
        macOS: partialCommunityLink(stableOrPreview,"all")+"x64.dmg",
        win32: partialCommunityLink(stableOrPreview,"all")+"x86.msi",
        win64: partialCommunityLink(stableOrPreview,"all")+"x64.msi",
        linux32: partialCommunityLink(stableOrPreview,"server")+"i386.deb",
        linux64: partialCommunityLink(stableOrPreview,"server")+"amd64.deb"
    }
}


/*
 * Download button utils function
 */

var platformLinkCollection = {
    community : communityLinks("stable"),
    communityPreview : communityLinks("preview")
};

var downloadLabel = "";
var communityDownloadLink = "";

function getPlatform() {
    var OS = "";
    if (/Windows|Win32|WOW64|Win64/.test(navigator.userAgent)) {
        OS = "win64"
        if (/Win32/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "win32";
        }
    } else if (/Mac/.test(navigator.userAgent)) {
        OS = "macOS";
    } else if (/Linux|X11/.test(navigator.userAgent)) {
        OS = "linux64";
        if (/i686|i386/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "linux32";
        }
    }
    return OS;
}

var platformNames = {
    macOS: "macOS",
    win64: "Windows",
    win32: "Windows (32 bits)",
    linux64: "Linux",
    linux32: "Linux (32 bits)"
};

/**
 * Download button main logic
 */

var stableLinks = communityLinks("stable");
var previewLinks = communityLinks("preview");
var platform = getPlatform();

$(".platform-name").append(platformNames[getPlatform()]);
$("#version-stable").append(versionCommunityLink.stable);
$("#version-preview").append(versionCommunityLink.preview);

for (var key in platformNames) {
    document.createElement("td", document.createElement)
    $( "#all-downloads" ).append(
        "<tr> \
            <td class=\"os\">"+platformNames[key]+"</td> \
            <td><a class=\"fa fa-download stable\" href=\""+stableLinks[key]+"\"></a></td> \
            <td><a class=\"fa fa-download preview\" href=\""+previewLinks[key]+"\"></a></td> \
        </tr>"
    );
};