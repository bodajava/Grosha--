const { Resend } = require('resend');

const resend = new Resend('re_JK2cRcuo_NRW64Cxq3oTier3TK9g7Q1SZ');

async function test() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Sales@goldengrainglobal.com',
      subject: 'Test from Antigravity',
      html: '<p>Testing the API key</p>'
    });

    if (error) {
      console.error('Resend Error:', error);
    } else {
      console.log('Resend Success:', data);
    }
  } catch (err) {
    console.error('Execution Error:', err);
  }
}

test();
