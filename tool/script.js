function RunCMD() {
WshShell = new ActiveXObject("WScript.Shell");
WshShell.Run("c:/windows/system32/cmd.exe", 1, false);
}

function RunMS32() {
WshShell = new ActiveXObject("WScript.Shell");
WshShell.Run("c:/windows/system32/msinfo32.exe", 1, false);
}


function choco() {
WshShell = new ActiveXObject("shell.application");
WshShell.ShellExecute("powershell.exe", "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))", "", "runas", 1);
}

function logout() {
WshShell = new ActiveXObject("shell.application");
WshShell.ShellExecute("C:/Windows/System32/shutdown.exe", "-l", "", "", 1);
}