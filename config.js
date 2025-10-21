// Store the paragraphs in a JavaScript object
const paragraphs = {
  dzoom: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=aka.ms#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  azoom: "vmess://eyJhZGQiOiJzdXBwb3J0Lnpvb20udXMiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Imtpcml5YS5jeWJlcnN0b3JldmlwLmNvbSIsImlkIjoiOGE4MjcxN2QtZGFiNC00NTgxLTkzMDgtZTQ2MjExMmNkMDBiIiwibmV0Ijoid3MiLCJwYXRoIjoiLyIsInBvcnQiOiI4MDgwIiwicHMiOiLwn5KAQ1lCRVItVlBO4p2k77iPLWNvbmZ1c2UtYnVuZ2Hwn5iOIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiItLS0iLCJ2IjoiMiJ9",
  hzoom: "vmess://eyJhZGQiOiIxMDQuMTYuMjUyLjU1IiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJraXJpeWEuY3liZXJzdG9yZXZpcC5jb20iLCJpZCI6IjhhODI3MTdkLWRhYjQtNDU4MS05MzA4LWU0NjIxMTJjZDAwYiIsIm5ldCI6IndzIiwicGF0aCI6Ii8iLCJwb3J0IjoiODA4MCIsInBzIjoi8J+SgENZQkVSLVZQTuKdpO+4jy1jb25mdXNlLWJ1bmdh8J+YjiIsInNjeSI6ImF1dG8iLCJzbmkiOiIiLCJ0bHMiOiIiLCJ0eXBlIjoiLS0tIiwidiI6IjIifQ==",
  sltzoom: "vmess://eyJhZGQiOiJuZXdzLnpvb20udXMiLCJhaWQiOiIwIiwiYWxwbiI6ImgzLGgyLGh0dHAvMS4xIiwiZnAiOiJjaHJvbWUiLCJob3N0Ijoia2lyaXlhLmN5YmVyc3RvcmV2aXAuY29tIiwiaWQiOiI4MTg5NGY0Ni00OWI5LTQ3MjYtYTU1My1jNThjMTYzODQzZGEiLCJuZXQiOiJ3cyIsInBhdGgiOiIvIiwicG9ydCI6Ijg0NDMiLCJwcyI6IvCfkoBDWUJFUi1WUE7wn6SoLWNvbmZ1c2UtYnVuZ2Hwn5iMIiwic2N5IjoiYXV0byIsInNuaSI6Imtpcml5YS5jeWJlcnN0b3JldmlwLmNvbSIsInRscyI6InRscyIsInR5cGUiOiItLS0iLCJ2IjoiMiJ9",
  slt4g: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=http%3A%2F%2Fzoom.us#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  fiber: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=www.zoom.us#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  asocial: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=android.googleapis.com#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  d348: "vmess://eyJhZGQiOiIxMDQuMTYuMjUyLjU1IiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJraXJpeWEuY3liZXJzdG9yZXZpcC5jb20iLCJpZCI6IjhhODI3MTdkLWRhYjQtNDU4MS05MzA4LWU0NjIxMTJjZDAwYiIsIm5ldCI6IndzIiwicGF0aCI6Ii8iLCJwb3J0IjoiODA4MCIsInBzIjoi8J+SgENZQkVSLVZQTuKdpO+4jy1jb25mdXNlLWJ1bmdh8J+YjiIsInNjeSI6ImF1dG8iLCJzbmkiOiIiLCJ0bHMiOiIiLCJ0eXBlIjoiLS0tIiwidiI6IjIifQ==",
  hyt: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=http%3A%2F%2Fyoutube.com#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  hwsp: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=facebook.net#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  hgaming: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=http%3A%2F%2Fsecure.vimeo.com#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  hsocial: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=http%3A%2F%2Flikee.video#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  tiktok: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=www.tiktok.com#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
  netflix: "vless://3647f73a-546f-41e6-9d18-99470851df57@kiriya.cyberstorevip.com:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&encryption=none&headerType=none&fp=chrome&type=tcp&sni=www.netflix.com#%F0%9F%92%80CYBER-VPN%F0%9F%98%8E-Confuse%20bunga%F0%9F%98%82",
};

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showMessage('Text copied to clipboard!'))
    .catch(err => showMessage('Failed to copy text: ' + err));
}

// Function to download files from config folder
function downloadConfigFile(filename) {
  // Path to your config folder
  const filePath = `config/${filename}`;
  
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showMessage(`Downloading ${filename}...`);
}

// Function to show a temporary message
function showMessage(msg) {
  let messageElement = document.getElementById('message');
  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.style.marginTop = '20px';
    messageElement.style.color = 'green';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.opacity = '0';
    messageElement.style.transition = 'opacity 0.5s';
    document.body.appendChild(messageElement);
  }

  messageElement.textContent = msg;
  messageElement.style.opacity = '1';
  
  setTimeout(() => {
    messageElement.style.opacity = '0';
  }, 2000);
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons
  const dzoom = document.getElementById('dzoom');
  if (dzoom) {
    dzoom.addEventListener('click', () => copyToClipboard(paragraphs.dzoom));
  }

  const azoom = document.getElementById('azoom');
  if (azoom) {
    azoom.addEventListener('click', () => copyToClipboard(paragraphs.azoom));
  }

  const hzoom = document.getElementById('hzoom');
  if (hzoom) {
    hzoom.addEventListener('click', () => copyToClipboard(paragraphs.hzoom));
  }

  const sltzoom = document.getElementById('sltzoom');
  if (sltzoom) {
    sltzoom.addEventListener('click', () => copyToClipboard(paragraphs.sltzoom));
  }

  const slt4g = document.getElementById('slt4g');
  if (slt4g) {
    slt4g.addEventListener('click', () => copyToClipboard(paragraphs.slt4g));
  }

  const fiber = document.getElementById('fiber');
  if (fiber) {
    fiber.addEventListener('click', () => copyToClipboard(paragraphs.fiber));
  }

  const asocial = document.getElementById('asocial');
  if (asocial) {
    asocial.addEventListener('click', () => copyToClipboard(paragraphs.asocial));
  }

  const d348 = document.getElementById('d348');
  if (d348) {
    d348.addEventListener('click', () => copyToClipboard(paragraphs.d348));
  }

  const hyt = document.getElementById('hyt');
  if (hyt) {
    hyt.addEventListener('click', () => copyToClipboard(paragraphs.hyt));
  }

  const hwsp = document.getElementById('hwsp');
  if (hwsp) {
    hwsp.addEventListener('click', () => copyToClipboard(paragraphs.hwsp));
  }

  const hgaming = document.getElementById('hgaming');
  if (hgaming) {
    hgaming.addEventListener('click', () => copyToClipboard(paragraphs.hgaming));
  }

  const hsocial = document.getElementById('hsocial');
  if (hsocial) {
    hsocial.addEventListener('click', () => copyToClipboard(paragraphs.hsocial));
  }

  const tiktok = document.getElementById('tiktok');
  if (tiktok) {
    tiktok.addEventListener('click', () => copyToClipboard(paragraphs.tiktok));
  }

  const netflix = document.getElementById('netflix');
  if (netflix) {
    netflix.addEventListener('click', () => copyToClipboard(paragraphs.netflix));
  }

  // Download buttons
  const dzoomssh = document.getElementById('dzoom-ssh');
  if (dzoomssh) {
    dzoomssh.addEventListener('click', () => downloadConfigFile('🗽Dialog zoom 🗽.ehi'));
  }
  
  const azoomssh = document.getElementById('azoom-ssh');
  if (azoomssh) {
    azoomssh.addEventListener('click', () => downloadConfigFile('🗽Airtel zoom 🗽.ehi'));
  }
  
  const hzoomssh = document.getElementById('hzoom-ssh');
  if (hzoomssh) {
    hzoomssh.addEventListener('click', () => downloadConfigFile('🗽Hutch zoom 🗽.ehi'));
  }
  
  const sltzoomssh = document.getElementById('sltzoom-ssh');
  if (sltzoomssh) {
    sltzoomssh.addEventListener('click', () => downloadConfigFile('🗽Mobitel zoom 🗽.ehi'));
  }
  
  const slt4gssh = document.getElementById('slt4g-ssh');
  if (slt4gssh) {
    slt4gssh.addEventListener('click', () => downloadConfigFile('🗽SLT 4G zoom 🗽.ehi'));
  }
  
  const fiberssh = document.getElementById('fiber-ssh');
  if (fiberssh) {
    fiberssh.addEventListener('click', () => downloadConfigFile('🗽SLTfiber zoom🗽.ehi'));
  }
  
  const asocialssh = document.getElementById('asocial-ssh');
  if (asocialssh) {
    asocialssh.addEventListener('click', () => downloadConfigFile('🗽Airtel Social 🗽.ehi'));
  }
  
  const d348ssh = document.getElementById('d348-ssh');
  if (d348ssh) {
    d348ssh.addEventListener('click', () => downloadConfigFile('🗽Dialog whatsapp🗽.ehi'));
  }
  
  const hytssh = document.getElementById('hyt-ssh');
  if (hytssh) {
    hytssh.addEventListener('click', () => downloadConfigFile('🗽hutch youtube 🗽.ehi'));
  }
  
  const hwspssh = document.getElementById('hwsp-ssh');
  if (hwspssh) {
    hwspssh.addEventListener('click', () => downloadConfigFile('🗽Airtel 498🗽.ehi'));
  }
  
  const hgamingssh = document.getElementById('hgaming-ssh');
  if (hgamingssh) {
    hgamingssh.addEventListener('click', () => downloadConfigFile('🗽Hutch Gaming 🗽.ehi'));
  }
  
  const hsocialssh = document.getElementById('hsocial-ssh');
  if (hsocialssh) {
    hsocialssh.addEventListener('click', () => downloadConfigFile('🗽Hutch social 🗽.ehi'));
  }
  
  const tiktokssh = document.getElementById('tiktok-ssh');
  if (tiktokssh) {
    tiktokssh.addEventListener('click', () => downloadConfigFile('🗽Tiktok 🗽.ehi'));
  }
  
  const netflixssh = document.getElementById('netflix-ssh');
  if (netflixssh) {
    netflixssh.addEventListener('click', () => downloadConfigFile('🗽Netflix🗽.ehi'));
  }
});
