async function fetchManifest() {
  try {
    const response = await fetch('../manifest.json'); // Ensure this path matches your manifest file location
    const manifest = await response.json();
    return manifest.version;
  } catch (error) {
    console.error('Error fetching manifest:', error);
    return null;
  }
}

async function displayVersion() {
  const version = await fetchManifest();
  if (version) {
    $('#version-info p').text(`Version: ${version}`);
  } else {
    $('#version-info p').text('Version information not available');
  }
}

$(document).ready(function() {
    displayVersion();
});
