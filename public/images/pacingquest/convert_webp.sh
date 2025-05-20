#!/bin/bash

# Répertoire contenant les images (par défaut le dossier courant)
DIR="${1:-.}"

# Options de qualité (modifiable si besoin, ici qualité 80)
QUALITY=80

# Extensions supportées
EXTENSIONS="png jpg jpeg"

mkdir webp

# Parcours des fichiers avec les extensions définies
for EXT in $EXTENSIONS; do
    for IMG in "$DIR"/*.$EXT; do
        # Vérifie si le fichier existe pour éviter l’erreur si aucun ne correspond
        [ -e "$IMG" ] || continue
        # Nom du fichier sans extension
        BASENAME=$(basename "$IMG")
        BASENAME_NO_EXT="${BASENAME%.*}"
        # Création du fichier .webp
        cwebp -q $QUALITY "$IMG" -o "$DIR/webp/$BASENAME_NO_EXT.webp"
        echo "Converti : $IMG -> webp/$BASENAME_NO_EXT.webp"
    done
done
