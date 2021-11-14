как запустить:
0. склонировать на локальный репозиторий 
1. Для запуска приложения необохимо использовать  "node": ">= 16.13.0<17" 
2. Ввести в командной строке npm i в папке приложения
3. Запустить приложение командой node mycli  c  заданными параметрами (к примеру: node mycli -c "C1-R1-C0-C0-A-R0-R1-A-C1" -i "./input.txt" -o "./output.txt")
 
требования запуску:
https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/ciphering-cli-tool.md

CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file (ырщд)
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"
