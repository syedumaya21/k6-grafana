// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  const vars = {}

  group('page_2 - https://indisell.com/auth/my-account', function () {
    response = http.get(
      'https://api.indisell.com/api/Accounts/SystemUser/VerifyEmail?EmailAddress=syedumaya021@gmail.com',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZXN1bHQiOiJbe1wiTG9nb0ZpbGVOYW1lMVVybFwiOm51bGwsXCJBY2NvdW50aW5nQ29tcGFueVwiOjEsXCJBY2NvdW50aW5nT3JkZXJUeXBlXCI6MCxcIk5vdGljZU1ldGhvZFwiOjEsXCJTdHlsZVNoZWV0RmlsZU5hbWVcIjpcImJsdWVcIixcIk1hc3RlclBhZ2VOYW1lXCI6XCJudWxsXCIsXCJDb21wYW55XCI6NzIsXCJTaXRlXCI6NTcsXCJTaXRlWFwiOlwiSW5kaXNlbGxcIixcIlNpdGVYeFwiOm51bGwsXCJLZXl3b3Jkc1wiOlwiSmFtbXUgXFx1MDAyNiBrYXNobWlyIFRvdXJpc20sIEpcXHUwMDI2SyBUb3VyaXNtLCBQbGFjZXMgdG8gVmlzaXQgaW4gS2FzaG1pciwgU3JpbmFnYXIgUGFja2FnZSwgSG91c2Vib2F0cywgSG90ZWxzIGluIEthc2htaXIsIFRyaXAgdG8gS2FzaG1pclwiLFwiQmFzZVVSTFwiOlwiYXBpLmluZGlzZWxsLmNvbVwiLFwiQWx0ZXJuYXRlVXJsXCI6bnVsbCxcIlN0YXJ0dXBQYWdlXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUxXCI6XCIwZTlhYTQ4NS05YjM3LTQ3NzEtYTU2Zi00ODc1NjRmZjIwNzcucG5nXCIsXCJMb2dvRmlsZU5hbWUxVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvMGU5YWE0ODUtOWIzNy00NzcxLWE1NmYtNDg3NTY0ZmYyMDc3LnBuZ1wiLFwiTmF2aWdhdGVVcmwxXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUyXCI6XCJhMmY5OWY3ZS1iMzVlLTRlN2UtYmRmOS0xMTRjYTI0OTJhMWIucG5nXCIsXCJMb2dvRmlsZU5hbWUyVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvYTJmOTlmN2UtYjM1ZS00ZTdlLWJkZjktMTE0Y2EyNDkyYTFiLnBuZ1wiLFwiTmF2aWdhdGVVcmwyXCI6bnVsbCxcIlNTTFwiOmZhbHNlLFwiSXNPcGVuVG9QdWJsaWNcIjp0cnVlLFwiSXNUZXN0TW9kZVwiOmZhbHNlLFwiSXNDbG9zZWRcIjpmYWxzZSxcIlNpdGVNZXNzYWdlXCI6XCIwXCIsXCJNYXhGYWlsZWRMb2dpbkNvdW50XCI6NSxcIlNob3dGYWlsZWRMb2dpbkNvdW50XCI6bnVsbCxcIlNob3dDb3N0RHVyaW5nQnJvd3NlXCI6dHJ1ZSxcIlBlcm1pdEJhY2tPcmRlclwiOnRydWUsXCJQZXJtaXRPbkxpbmVPcmRlclwiOnRydWUsXCJBbGxvd1VzZXJTaWdudXBcIjp0cnVlLFwiUG9pbnRCYXNlZFwiOmZhbHNlLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVwiOjYzLFwiRmluYW5jaWFsQ29kZVwiOlwiTTEyVVwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVwiOlwiTFwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVhcIjpcIk9yZGVyIExpbmUgQ291bnRcIixcIkNvbXBhbnlYXCI6XCJLYXNobWlyIFNlYXJjaFwiLFwiU2VjdGlvblRhZ1wiOm51bGwsXCJDYXRlZ29yeVRhZ1wiOlwiQ2F0ZWdvcnlcIixcIkJyYW5kVGFnXCI6XCJTZWN0aW9uXCIsXCJFeHRlcm5hbExpbmtUYWdcIjpcIlJlc291cmNlc1wiLFwiTm90aWNlTWV0aG9kWFwiOlwiTm90aWNlIE1ldGhvZCBBXCIsXCJTaXRlTWVzc2FnZVhcIjpudWxsLFwiU2l0ZU1lc3NhZ2VYWFwiOm51bGwsXCJTaXRlQ2F0YWxvZ1wiOjUyODkxLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVhcIjpcIkN1c3RvbWVyXCIsXCJBbGxvd1dvcmtGbG93XCI6ZmFsc2UsXCJBdXRoZW50aWNhdGlvbk1vZGVcIjpcIk1cIixcIkFsbG93V29ya0ZvbHdFbWFpbFwiOmZhbHNlLFwiR29vZ2xla2V5XCI6bnVsbCxcIlJlZ2lzdHJhdGlvbkxhYmVsXCI6XCJSZWdpc3RlciBZb3VyIEJ1c2luZXNzIFRvZGF5ISBJdCBpcyBGUkVFIVwiLFwiU2hvd0JyYW5kXCI6dHJ1ZSxcIlNob3dWZW5kb3JcIjp0cnVlLFwiU2hvd0xhYmVsXCI6dHJ1ZSxcIkZhY2VCb29rXCI6bnVsbCxcIlR3aXR0ZXJcIjpudWxsLFwiQ29weXJpZ2h0XCI6XCJDb3B5cmlnaHQgMjAxMy0yMDE2IFxcdTAwQTkgS1MuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFwiLFwiQ2hhdFNjcmlwdFwiOlwid2luZG93LiR6b3BpbXx8KGZ1bmN0aW9uKGQscyl7dmFyIHo9JHpvcGltPWZ1bmN0aW9uKGMpe1xcclxcbnouXy5wdXNoKGMpfSwkPXoucz1cXHJcXG5kLmNyZWF0ZUVsZW1lbnQocyksZT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO3ouc2V0PWZ1bmN0aW9uKG8pe3ouc2V0Llxcclxcbl8ucHVzaChvKX07ei5fPVtdO3ouc2V0Ll89W107JC5hc3luYz0hMDskLnNldEF0dHJpYnV0ZShcXHUwMDI3Y2hhcnNldFxcdTAwMjcsXFx1MDAyN3V0Zi04XFx1MDAyNyk7XFxyXFxuJC5zcmM9XFx1MDAyNy8vY2RuLnpvcGltLmNvbS8_MTJBbnBVMkxxa0ZsNGRpd2tvbFhLQmlIcjNnYlFQbWpcXHUwMDI3O3oudD1cXHUwMDJCbmV3IERhdGU7JC5cXHJcXG50eXBlPVxcdTAwMjd0ZXh0L2phdmFzY3JpcHRcXHUwMDI3O2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoJCxlKX0pKGRvY3VtZW50LFxcdTAwMjdzY3JpcHRcXHUwMDI3KTtcIixcIkFuYWx5dGljc1NjcmlwdFwiOm51bGwsXCJZb3V0dWJlXCI6bnVsbCxcIkxpbmtlZEluXCI6bnVsbCxcIkdvb2dsZVBsdXNcIjpudWxsLFwiVmFyaWZ5RW1haWxcIjpmYWxzZSxcIk5ld3NMZXR0ZXJTdWJzY3JpcHRpb25cIjpmYWxzZSxcIlN0eWxlXCI6bnVsbCxcIlNob3dUb3BIZWFkZXJcIjpmYWxzZSxcIlRva2VuXCI6bnVsbCxcIkRpc2NvdW50ZWRDYXRlZ29yaWVzXCI6XCI0MDcsNDA0LDQwMywzOTcsMzk0XCIsXCJyb2xlVHlwZVwiOltcIkd1ZXN0XCJdfV0iLCJSb2xlc0Fzc2lnbmVkIjoiR3Vlc3QiLCJqdGkiOiI0NzhlZjg3My02OGQ4LTRjYWEtOTVjNy1mMThiOWE1YjhhZmUiLCJleHAiOjIwMjM0Mzc0ODUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6Mjk5MDQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjI5OTA0In0.lGXgDek0qR0cA4oWhXXNRW4eegpcf2krIOfqZx589uA',
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options(
      'https://api.indisell.com/api/Accounts/SystemUser/VerifyEmail?EmailAddress=syedumaya021@gmail.com',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(7.4)

    response = http.post(
      'https://api.indisell.com/api/Accounts/SystemUser/Login',
      '{"email":"syedumaya021@gmail.com","password":"test@1234","role":"Customer"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZXN1bHQiOiJbe1wiTG9nb0ZpbGVOYW1lMVVybFwiOm51bGwsXCJBY2NvdW50aW5nQ29tcGFueVwiOjEsXCJBY2NvdW50aW5nT3JkZXJUeXBlXCI6MCxcIk5vdGljZU1ldGhvZFwiOjEsXCJTdHlsZVNoZWV0RmlsZU5hbWVcIjpcImJsdWVcIixcIk1hc3RlclBhZ2VOYW1lXCI6XCJudWxsXCIsXCJDb21wYW55XCI6NzIsXCJTaXRlXCI6NTcsXCJTaXRlWFwiOlwiSW5kaXNlbGxcIixcIlNpdGVYeFwiOm51bGwsXCJLZXl3b3Jkc1wiOlwiSmFtbXUgXFx1MDAyNiBrYXNobWlyIFRvdXJpc20sIEpcXHUwMDI2SyBUb3VyaXNtLCBQbGFjZXMgdG8gVmlzaXQgaW4gS2FzaG1pciwgU3JpbmFnYXIgUGFja2FnZSwgSG91c2Vib2F0cywgSG90ZWxzIGluIEthc2htaXIsIFRyaXAgdG8gS2FzaG1pclwiLFwiQmFzZVVSTFwiOlwiYXBpLmluZGlzZWxsLmNvbVwiLFwiQWx0ZXJuYXRlVXJsXCI6bnVsbCxcIlN0YXJ0dXBQYWdlXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUxXCI6XCIwZTlhYTQ4NS05YjM3LTQ3NzEtYTU2Zi00ODc1NjRmZjIwNzcucG5nXCIsXCJMb2dvRmlsZU5hbWUxVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvMGU5YWE0ODUtOWIzNy00NzcxLWE1NmYtNDg3NTY0ZmYyMDc3LnBuZ1wiLFwiTmF2aWdhdGVVcmwxXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUyXCI6XCJhMmY5OWY3ZS1iMzVlLTRlN2UtYmRmOS0xMTRjYTI0OTJhMWIucG5nXCIsXCJMb2dvRmlsZU5hbWUyVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvYTJmOTlmN2UtYjM1ZS00ZTdlLWJkZjktMTE0Y2EyNDkyYTFiLnBuZ1wiLFwiTmF2aWdhdGVVcmwyXCI6bnVsbCxcIlNTTFwiOmZhbHNlLFwiSXNPcGVuVG9QdWJsaWNcIjp0cnVlLFwiSXNUZXN0TW9kZVwiOmZhbHNlLFwiSXNDbG9zZWRcIjpmYWxzZSxcIlNpdGVNZXNzYWdlXCI6XCIwXCIsXCJNYXhGYWlsZWRMb2dpbkNvdW50XCI6NSxcIlNob3dGYWlsZWRMb2dpbkNvdW50XCI6bnVsbCxcIlNob3dDb3N0RHVyaW5nQnJvd3NlXCI6dHJ1ZSxcIlBlcm1pdEJhY2tPcmRlclwiOnRydWUsXCJQZXJtaXRPbkxpbmVPcmRlclwiOnRydWUsXCJBbGxvd1VzZXJTaWdudXBcIjp0cnVlLFwiUG9pbnRCYXNlZFwiOmZhbHNlLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVwiOjYzLFwiRmluYW5jaWFsQ29kZVwiOlwiTTEyVVwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVwiOlwiTFwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVhcIjpcIk9yZGVyIExpbmUgQ291bnRcIixcIkNvbXBhbnlYXCI6XCJLYXNobWlyIFNlYXJjaFwiLFwiU2VjdGlvblRhZ1wiOm51bGwsXCJDYXRlZ29yeVRhZ1wiOlwiQ2F0ZWdvcnlcIixcIkJyYW5kVGFnXCI6XCJTZWN0aW9uXCIsXCJFeHRlcm5hbExpbmtUYWdcIjpcIlJlc291cmNlc1wiLFwiTm90aWNlTWV0aG9kWFwiOlwiTm90aWNlIE1ldGhvZCBBXCIsXCJTaXRlTWVzc2FnZVhcIjpudWxsLFwiU2l0ZU1lc3NhZ2VYWFwiOm51bGwsXCJTaXRlQ2F0YWxvZ1wiOjUyODkxLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVhcIjpcIkN1c3RvbWVyXCIsXCJBbGxvd1dvcmtGbG93XCI6ZmFsc2UsXCJBdXRoZW50aWNhdGlvbk1vZGVcIjpcIk1cIixcIkFsbG93V29ya0ZvbHdFbWFpbFwiOmZhbHNlLFwiR29vZ2xla2V5XCI6bnVsbCxcIlJlZ2lzdHJhdGlvbkxhYmVsXCI6XCJSZWdpc3RlciBZb3VyIEJ1c2luZXNzIFRvZGF5ISBJdCBpcyBGUkVFIVwiLFwiU2hvd0JyYW5kXCI6dHJ1ZSxcIlNob3dWZW5kb3JcIjp0cnVlLFwiU2hvd0xhYmVsXCI6dHJ1ZSxcIkZhY2VCb29rXCI6bnVsbCxcIlR3aXR0ZXJcIjpudWxsLFwiQ29weXJpZ2h0XCI6XCJDb3B5cmlnaHQgMjAxMy0yMDE2IFxcdTAwQTkgS1MuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFwiLFwiQ2hhdFNjcmlwdFwiOlwid2luZG93LiR6b3BpbXx8KGZ1bmN0aW9uKGQscyl7dmFyIHo9JHpvcGltPWZ1bmN0aW9uKGMpe1xcclxcbnouXy5wdXNoKGMpfSwkPXoucz1cXHJcXG5kLmNyZWF0ZUVsZW1lbnQocyksZT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO3ouc2V0PWZ1bmN0aW9uKG8pe3ouc2V0Llxcclxcbl8ucHVzaChvKX07ei5fPVtdO3ouc2V0Ll89W107JC5hc3luYz0hMDskLnNldEF0dHJpYnV0ZShcXHUwMDI3Y2hhcnNldFxcdTAwMjcsXFx1MDAyN3V0Zi04XFx1MDAyNyk7XFxyXFxuJC5zcmM9XFx1MDAyNy8vY2RuLnpvcGltLmNvbS8_MTJBbnBVMkxxa0ZsNGRpd2tvbFhLQmlIcjNnYlFQbWpcXHUwMDI3O3oudD1cXHUwMDJCbmV3IERhdGU7JC5cXHJcXG50eXBlPVxcdTAwMjd0ZXh0L2phdmFzY3JpcHRcXHUwMDI3O2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoJCxlKX0pKGRvY3VtZW50LFxcdTAwMjdzY3JpcHRcXHUwMDI3KTtcIixcIkFuYWx5dGljc1NjcmlwdFwiOm51bGwsXCJZb3V0dWJlXCI6bnVsbCxcIkxpbmtlZEluXCI6bnVsbCxcIkdvb2dsZVBsdXNcIjpudWxsLFwiVmFyaWZ5RW1haWxcIjpmYWxzZSxcIk5ld3NMZXR0ZXJTdWJzY3JpcHRpb25cIjpmYWxzZSxcIlN0eWxlXCI6bnVsbCxcIlNob3dUb3BIZWFkZXJcIjpmYWxzZSxcIlRva2VuXCI6bnVsbCxcIkRpc2NvdW50ZWRDYXRlZ29yaWVzXCI6XCI0MDcsNDA0LDQwMywzOTcsMzk0XCIsXCJyb2xlVHlwZVwiOltcIkd1ZXN0XCJdfV0iLCJSb2xlc0Fzc2lnbmVkIjoiR3Vlc3QiLCJqdGkiOiI0NzhlZjg3My02OGQ4LTRjYWEtOTVjNy1mMThiOWE1YjhhZmUiLCJleHAiOjIwMjM0Mzc0ODUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6Mjk5MDQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjI5OTA0In0.lGXgDek0qR0cA4oWhXXNRW4eegpcf2krIOfqZx589uA',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['token1'] = jsonpath.query(response.json(), '$.data[0].token')[0]

    response = http.options('https://api.indisell.com/api/Accounts/SystemUser/Login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://indisell.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(0.6)

    response = http.options('https://api.indisell.com/api/Cart', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://indisell.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.options('https://api.indisell.com/api/Home/GetNewDynamicHeader', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://indisell.com',
        'sec-fetch-mode': 'cors',
      },
    })
  })

  group('page_3 - https://indisell.com/home/main-dashboard', function () {
    response = http.get('https://api.indisell.com/api/Cart', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: `Bearer ${vars['token1']}`,
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://api.indisell.com/api/Home/GetNewDynamicHeader', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: `Bearer ${vars['token1']}`,
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://api.indisell.com/api/Cart', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: `Bearer ${vars['token1']}`,
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.options('https://api.indisell.com/api/Cart', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://indisell.com',
        'sec-fetch-mode': 'cors',
      },
    })
    response = http.options('https://api.indisell.com/api/Home/GetNewDynamicHeader', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://indisell.com',
        'sec-fetch-mode': 'cors',
      },
    })
    response = http.get('https://api.indisell.com/api/Home/GetNewDynamicHeader', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: `Bearer ${vars['token1']}`,
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://api.indisell.com/api/Home/FetchTop4DiscountedProductsForHome?productcategory=407,404,403,397,394&isCatalogItem=true',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.options(
      'https://api.indisell.com/api/Home/FetchTop4DiscountedProductsForHome?productcategory=407,404,403,397,394&isCatalogItem=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.get(
      'https://api.indisell.com/api/Home/FetchTop4DiscountedProductsForHome?productcategory=407,404,403,397,394&isCatalogItem=false',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.options(
      'https://api.indisell.com/api/Home/FetchTop4DiscountedProductsForHome?productcategory=407,404,403,397,394&isCatalogItem=false',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.get(
      'https://api.indisell.com/api/Home/FetchForProductCategoryImages?productCategory=',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.options(
      'https://api.indisell.com/api/Home/FetchForProductCategoryImages?productCategory=',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.options(
      'https://api.indisell.com/api/Home/FetchItemsForHome?pageNumber=1&pageSize=15',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.get(
      'https://api.indisell.com/api/Home/FetchItemsForHome?pageNumber=1&pageSize=15',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.options(
      'https://api.indisell.com/api/Home/FetchItemsForHome?pageNumber=2&pageSize=15',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.get(
      'https://api.indisell.com/api/Home/FetchItemsForHome?pageNumber=2&pageSize=15',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(3.6)
    response = http.options(
      'https://api.indisell.com/api/Settings/FetchForBaseUrl?baseUrl=api.indisell.com',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization',
          'access-control-request-method': 'GET',
          origin: 'https://indisell.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    response = http.get(
      'https://api.indisell.com/api/Settings/FetchForBaseUrl?baseUrl=api.indisell.com',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token1']}`,
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://api.indisell.com/api/Home/GetNewDynamicHeader', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZXN1bHQiOiJbe1wiTG9nb0ZpbGVOYW1lMVVybFwiOm51bGwsXCJBY2NvdW50aW5nQ29tcGFueVwiOjEsXCJBY2NvdW50aW5nT3JkZXJUeXBlXCI6MCxcIk5vdGljZU1ldGhvZFwiOjEsXCJTdHlsZVNoZWV0RmlsZU5hbWVcIjpcImJsdWVcIixcIk1hc3RlclBhZ2VOYW1lXCI6XCJudWxsXCIsXCJDb21wYW55XCI6NzIsXCJTaXRlXCI6NTcsXCJTaXRlWFwiOlwiSW5kaXNlbGxcIixcIlNpdGVYeFwiOm51bGwsXCJLZXl3b3Jkc1wiOlwiSmFtbXUgXFx1MDAyNiBrYXNobWlyIFRvdXJpc20sIEpcXHUwMDI2SyBUb3VyaXNtLCBQbGFjZXMgdG8gVmlzaXQgaW4gS2FzaG1pciwgU3JpbmFnYXIgUGFja2FnZSwgSG91c2Vib2F0cywgSG90ZWxzIGluIEthc2htaXIsIFRyaXAgdG8gS2FzaG1pclwiLFwiQmFzZVVSTFwiOlwiYXBpLmluZGlzZWxsLmNvbVwiLFwiQWx0ZXJuYXRlVXJsXCI6bnVsbCxcIlN0YXJ0dXBQYWdlXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUxXCI6XCIwZTlhYTQ4NS05YjM3LTQ3NzEtYTU2Zi00ODc1NjRmZjIwNzcucG5nXCIsXCJMb2dvRmlsZU5hbWUxVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvMGU5YWE0ODUtOWIzNy00NzcxLWE1NmYtNDg3NTY0ZmYyMDc3LnBuZ1wiLFwiTmF2aWdhdGVVcmwxXCI6XCJudWxsXCIsXCJMb2dvRmlsZU5hbWUyXCI6XCJhMmY5OWY3ZS1iMzVlLTRlN2UtYmRmOS0xMTRjYTI0OTJhMWIucG5nXCIsXCJMb2dvRmlsZU5hbWUyVVJMXCI6XCIvc2l0ZS9pbWFnZXMvNTcvYTJmOTlmN2UtYjM1ZS00ZTdlLWJkZjktMTE0Y2EyNDkyYTFiLnBuZ1wiLFwiTmF2aWdhdGVVcmwyXCI6bnVsbCxcIlNTTFwiOmZhbHNlLFwiSXNPcGVuVG9QdWJsaWNcIjp0cnVlLFwiSXNUZXN0TW9kZVwiOmZhbHNlLFwiSXNDbG9zZWRcIjpmYWxzZSxcIlNpdGVNZXNzYWdlXCI6XCIwXCIsXCJNYXhGYWlsZWRMb2dpbkNvdW50XCI6NSxcIlNob3dGYWlsZWRMb2dpbkNvdW50XCI6bnVsbCxcIlNob3dDb3N0RHVyaW5nQnJvd3NlXCI6dHJ1ZSxcIlBlcm1pdEJhY2tPcmRlclwiOnRydWUsXCJQZXJtaXRPbkxpbmVPcmRlclwiOnRydWUsXCJBbGxvd1VzZXJTaWdudXBcIjp0cnVlLFwiUG9pbnRCYXNlZFwiOmZhbHNlLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVwiOjYzLFwiRmluYW5jaWFsQ29kZVwiOlwiTTEyVVwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVwiOlwiTFwiLFwiU2hpcHBpbmdDb3N0Vm9sdW1lQmFzZVhcIjpcIk9yZGVyIExpbmUgQ291bnRcIixcIkNvbXBhbnlYXCI6XCJLYXNobWlyIFNlYXJjaFwiLFwiU2VjdGlvblRhZ1wiOm51bGwsXCJDYXRlZ29yeVRhZ1wiOlwiQ2F0ZWdvcnlcIixcIkJyYW5kVGFnXCI6XCJTZWN0aW9uXCIsXCJFeHRlcm5hbExpbmtUYWdcIjpcIlJlc291cmNlc1wiLFwiTm90aWNlTWV0aG9kWFwiOlwiTm90aWNlIE1ldGhvZCBBXCIsXCJTaXRlTWVzc2FnZVhcIjpudWxsLFwiU2l0ZU1lc3NhZ2VYWFwiOm51bGwsXCJTaXRlQ2F0YWxvZ1wiOjUyODkxLFwiRGVmYXVsdFNpdGVSb2xlVHlwZVhcIjpcIkN1c3RvbWVyXCIsXCJBbGxvd1dvcmtGbG93XCI6ZmFsc2UsXCJBdXRoZW50aWNhdGlvbk1vZGVcIjpcIk1cIixcIkFsbG93V29ya0ZvbHdFbWFpbFwiOmZhbHNlLFwiR29vZ2xla2V5XCI6bnVsbCxcIlJlZ2lzdHJhdGlvbkxhYmVsXCI6XCJSZWdpc3RlciBZb3VyIEJ1c2luZXNzIFRvZGF5ISBJdCBpcyBGUkVFIVwiLFwiU2hvd0JyYW5kXCI6dHJ1ZSxcIlNob3dWZW5kb3JcIjp0cnVlLFwiU2hvd0xhYmVsXCI6dHJ1ZSxcIkZhY2VCb29rXCI6bnVsbCxcIlR3aXR0ZXJcIjpudWxsLFwiQ29weXJpZ2h0XCI6XCJDb3B5cmlnaHQgMjAxMy0yMDE2IFxcdTAwQTkgS1MuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFwiLFwiQ2hhdFNjcmlwdFwiOlwid2luZG93LiR6b3BpbXx8KGZ1bmN0aW9uKGQscyl7dmFyIHo9JHpvcGltPWZ1bmN0aW9uKGMpe1xcclxcbnouXy5wdXNoKGMpfSwkPXoucz1cXHJcXG5kLmNyZWF0ZUVsZW1lbnQocyksZT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO3ouc2V0PWZ1bmN0aW9uKG8pe3ouc2V0Llxcclxcbl8ucHVzaChvKX07ei5fPVtdO3ouc2V0Ll89W107JC5hc3luYz0hMDskLnNldEF0dHJpYnV0ZShcXHUwMDI3Y2hhcnNldFxcdTAwMjcsXFx1MDAyN3V0Zi04XFx1MDAyNyk7XFxyXFxuJC5zcmM9XFx1MDAyNy8vY2RuLnpvcGltLmNvbS8_MTJBbnBVMkxxa0ZsNGRpd2tvbFhLQmlIcjNnYlFQbWpcXHUwMDI3O3oudD1cXHUwMDJCbmV3IERhdGU7JC5cXHJcXG50eXBlPVxcdTAwMjd0ZXh0L2phdmFzY3JpcHRcXHUwMDI3O2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoJCxlKX0pKGRvY3VtZW50LFxcdTAwMjdzY3JpcHRcXHUwMDI3KTtcIixcIkFuYWx5dGljc1NjcmlwdFwiOm51bGwsXCJZb3V0dWJlXCI6bnVsbCxcIkxpbmtlZEluXCI6bnVsbCxcIkdvb2dsZVBsdXNcIjpudWxsLFwiVmFyaWZ5RW1haWxcIjpmYWxzZSxcIk5ld3NMZXR0ZXJTdWJzY3JpcHRpb25cIjpmYWxzZSxcIlN0eWxlXCI6bnVsbCxcIlNob3dUb3BIZWFkZXJcIjpmYWxzZSxcIlRva2VuXCI6bnVsbCxcIkRpc2NvdW50ZWRDYXRlZ29yaWVzXCI6XCI0MDcsNDA0LDQwMywzOTcsMzk0XCIsXCJyb2xlVHlwZVwiOltcIkd1ZXN0XCJdfV0iLCJSb2xlc0Fzc2lnbmVkIjoiR3Vlc3QiLCJqdGkiOiJhZDNlYTU5NS01NjQ1LTQwZTEtOTUxNi03NmMxNjcxNjljZWQiLCJleHAiOjIwMjM0Mzc3NjYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6Mjk5MDQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjI5OTA0In0.x116w1Pw1Uob9XGESrLZlvNVRmjKksKhcHhEb4xDj1o',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}