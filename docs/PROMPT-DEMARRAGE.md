# Prompts de démarrage — sites vitrines clients

> Copie-colle l'un de ces prompts au début d'une **nouvelle session Claude Code**
> (dans le dossier du projet client). Ils s'appuient sur le skill réutilisable
> **`/site-vitrine`** (installé dans `~/.claude/skills/site-vitrine/`).
> Remplace les `<…>` par les infos du client.

---

## 🆕 A. Démarrer un NOUVEAU projet client

```
Utilise le skill /site-vitrine.

On démarre un nouveau site vitrine pour un client. Contexte : c'est un POC
décliné par métier — réutilise au maximum le socle commun (stack Next.js,
design system, modules) et ne personnalise que le spécifique métier/client.

CLIENT
- Marque / nom commercial : <…>
- Dirigeant·e : <…>
- Métier / activité : <… ex: électricien>
- Statut juridique + SIREN : <…>
- Code APE : <…>
- Adresse : <…>
- Téléphone / WhatsApp : <…>
- E-mail : <…>
- Zone d'intervention : <… ville + communes>

ATTENTES
- Couleurs / ambiance souhaitées : <… ou "propose selon le métier">
- Logo / photos dispo : <oui/non>
- Tarifs : <affichés / sur devis>
- Prise de RDV en ligne : <oui Cal.com / non>
- Dispositifs spécifiques : <… ex: urgence 24/7, crédit d'impôt, aides>
- Autres demandes : <…>

DÉROULÉ ATTENDU
1. Cherche/rappelle les nuances du métier (§7 du skill) + les aides/réglementations.
2. Pose-moi uniquement les décisions bloquantes (questions ciblées).
3. Rédige docs/DEFINITION-DU-BESOIN.md et propose des idées pertinentes en plus.
4. Attends mon "go" avant de coder, puis construis le MVP selon le skill.
5. Mets à jour le journal du skill (§11) et la mémoire à la fin.
```

---

## ♻️ B. REPRENDRE un projet existant

```
Utilise le skill /site-vitrine.

On reprend un site vitrine client déjà commencé (dossier courant). Avant toute
chose :
1. Lis docs/DEFINITION-DU-BESOIN.md et le journal du skill.
2. Lis lib/site.ts et lib/content.ts pour l'état du contenu.
3. Lance `npm run build` pour vérifier que tout passe.
4. Fais-moi un point rapide : ce qui est fait, ce qui reste (phase 1 / phase 2).

Ensuite, on continue sur : <… ce que tu veux faire aujourd'hui>
```

---

## Référence
- Skill : `~/.claude/skills/site-vitrine/SKILL.md`
- Implémentation de référence (POC) : projet **SANAD CLEAN** (`/home/projects/souadtazya`)
- Cahier des charges type : `docs/DEFINITION-DU-BESOIN.md`
