if (Get-Command 'node' -errorAction SilentlyContinue) {
  Set-ExecutionPolicy RemoteSigned -scope CurrentUser
  Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
}

scoop install nodejs
npm i git+https://github.com/DolphinsGrace/mcsh.git -g
