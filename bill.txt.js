const billText = `
https://openstates.org/mn/bills/2021-2022/HF1375/

1.1 	A bill for an act
1.2 	relating to elections; providing for ranked-choice voting in elections for federal 
1.3 	and state offices; authorizing jurisdictions to adopt ranked-choice voting for local 
1.4 	offices; establishing procedures for adoption, implementation, and use of 
1.5 	ranked-choice voting; allowing municipalities to use electronic voting systems 
1.6 	with a reallocation feature; authorizing rulemaking;amending Minnesota Statutes 
1.7 	2020, sections 204B.27, by adding a subdivision; 204B.34, subdivision 1; 204B.35, 
1.8 	subdivision 1; 204C.19, by adding a subdivision; 204C.21, by adding a subdivision; 
1.9 	204C.24, subdivision 1; 204C.32, subdivision 1; 204C.33, subdivisions 1, 3; 
1.10 	204D.08, subdivisions 4, 5; 204D.10, subdivisions 1, 3; 204D.11, subdivision 1; 
1.11 	205.13, subdivision 2; 206.58, subdivision 1; 206.83; 206.89, subdivisions 2, 3; 
1.12 	207A.12; 208.05; proposing coding for new law in Minnesota Statutes, chapter 
1.13 	206; proposing coding for new law as Minnesota Statutes, chapter 204E.
1.14 	BE IT ENACTED BY THE LEGISLATURE OF THE STATE OF MINNESOTA:

1.15 	ARTICLE 1
1.16 	RANKED CHOICE VOTING IMPLEMENTATION

1.17 	Section 1. [204E.01] APPLICABILITY.
1.18 	This chapter applies to all elections expressly required or authorized by law to use 
1.19 	ranked-choice voting. All other provisions of the Minnesota Election Law also apply, to 
1.20 	the extent they are not inconsistent with this chapter.

1.21 	Sec. 2. [204E.02] DEFINITIONS.
1.22 		Subdivision 1.Scope. The definitions in this section apply to this chapter.
1.23 		Subd. 2.Batch elimination.  "Batch elimination" means a simultaneous defeat of multiple 
1.24 	continuing candidates that have no mathematical chance of being elected.
2.1 		Subd. 3.Cast vote record. "Cast vote record" means the tabulatable record of all votes 
2.2 	produced by a single voter in one voting session.
2.3 		Subd. 4.Duplicate ranking. "Duplicate ranking" means a voter has ranked the same 
2.4 	candidate at multiple rankings for the office being counted.
2.5 		Subd. 5.Exhausted ballot. "Exhausted ballot" means a ballot that can no longer be 
2.6 	advanced under the procedures in section 204E.06.
2.7 		Subd. 6.Highest continuing ranking. "Highest continuing ranking" means the ranking 
2.8 	on a voter's ballot with the lowest numerical value for a continuing candidate.
2.9 		Subd. 7.Local election official. "Local election official" means the county auditor or 
2.10 	municipal clerk responsible for duties related to election administration in the applicable 
2.11 	jurisdiction.
2.12 		Subd. 8.Mathematically impossible to be elected. "Mathematically impossible to be 
2.13 	elected" means either:
2.14 	(1) the candidate cannot be elected because the candidate's current vote total plus all 
2.15 	votes that could possibly be transferred to the candidate in future rounds from candidates 
2.16 	with fewer votes or an equal number of votes and surplus votes would not be enough to 
2.17 	surpass the candidate with the next higher current vote total; or
2.18 	(2) the candidate has a lower current vote total than a candidate who is described by 
2.19 	clause (1).
2.20 		Subd. 9.Overvote. "Overvote" means a voter has ranked more than one candidate at 
2.21 	the same ranking.
2.22 		Subd. 10.Partially defective ballot. "Partially defective ballot" means a ballot that is 
2.23 	defective to the extent that the election judges are unable to determine the voter's intent with 
2.24 	respect to the office being counted.
2.25 		Subd. 11.Ranked-choice voting. "Ranked-choice voting" means an election method 
2.26 	in which voters rank candidates for an office in order of their preference, with each vote 
2.27 	counting for the highest-ranked continuing candidate on each ballot until that candidate has 
2.28 	been elected or defeated by the method established in this chapter.
2.29 		Subd. 12.Ranked-choice voting tabulation center. "Ranked-choice voting tabulation 
2.30 	center" means the place selected for the automatic or manual processing and tabulation of 
2.31 	ballots.
3.1 		Subd. 13.Ranking. "Ranking" means the number assigned by a voter to a candidate to 
3.2 	express the voter's preference for that candidate. Ranking number one is the highest ranking. 
3.3 	A ranking of lower numerical value indicates a greater preference for a candidate than a 
3.4 	ranking of higher numerical value.
3.5 		Subd. 14.Round. "Round" means an instance of the sequence of voting tabulation steps 
3.6 	established in section 204E.06.
3.7 		Subd. 15.Skipped ranking. "Skipped ranking" means a voter has left a ranking blank 
3.8 	and ranks a candidate at a subsequent ranking.
3.9 		Subd. 16.Surplus. "Surplus" means the total number of votes cast for an elected 
3.10 	candidate in excess of the threshold.
3.11 		Subd. 17.Surplus fraction of a vote. "Surplus fraction of a vote" means the proportion 
3.12 	of each vote to be transferred when a surplus is transferred. The surplus fraction is calculated 
3.13 	by dividing the surplus by the total votes cast for the elected candidate, calculated to four 
3.14 	decimal places, ignoring any remainder.
3.15 		Subd. 18.Threshold. "Threshold" means the number of votes sufficient for a candidate 
3.16 	to be elected. In any given election, the threshold equals the total votes counted in the first 
3.17 	round after removing defective ballots, divided by the sum of one plus the number of offices 
3.18 	to be filled and adding one to the quotient, disregarding any fractions.
3.19 		Subd. 19.Transfer value. "Transfer value" means the fraction of a vote that a transferred 
3.20 	ballot will contribute to the next ranked continuing candidate on that ballot. The transfer 
3.21 	value of a vote cast for an elected candidate is calculated by multiplying the surplus fraction 
3.22 	of each vote by its current value, calculated to four decimal places, ignoring any remainder. 
3.23 	The transfer value of a vote cast for a defeated candidate is the same as its current value.
3.24 		Subd. 20.Transferable vote. "Transferable vote" means a vote or a fraction of a vote 
3.25 	for a candidate who has been either elected or defeated.
3.26 		Subd. 21.Totally defective ballot. "Totally defective ballot" means a ballot that is 
3.27 	defective to the extent that election judges are unable to determine the voter's intent for any 
3.28 	office on the ballot.
3.29 		Subd. 22.Undervote. "Undervote" means a voter did not rank any candidates for an 
3.30 	office.

4.1 	Sec. 3. [204E.03] STATEWIDE IMPLEMENTATION OF RANKED-CHOICE 
4.2 	VOTING; AUTHORIZATION FOR LOCAL ADOPTION.
4.3 		Subdivision 1.Application to federal and state offices. The ranked-choice voting 
4.4 	procedure established in this chapter must be the method used to nominate and elect 
4.5 	candidates for federal offices, state constitutional offices, and the legislature at every regular 
4.6 	or special primary or general election conducted in the state. To the extent a conflict exists 
4.7 	between this chapter and another provision of the Minnesota Election Law pertaining to the 
4.8 	process of casting or counting votes at an election at which ranked-choice voting is used, 
4.9 	this chapter prevails.
4.10 		Subd. 2.Local authorization. (a) The following political subdivisions may adopt, in 
4.11 	the manner provided in this section, ranked-choice voting as a method of voting for local 
4.12 	offices within the political subdivision:
4.13 	(1) home rule charter or statutory cities;
4.14 	(2) counties;
4.15 	(3) townships; and
4.16 	(4) school districts.
4.17 	(b) A jurisdiction that adopts ranked-choice voting may do so by adopting an ordinance 
4.18 	or resolution or by a ballot question presented to the voters. The ranked-choice voting 
4.19 	method may be repealed by one of the same methods provided for adoption.
4.20 	(c) A home rule charter jurisdiction that adopts a ranked-choice voting system in its 
4.21 	charter may adopt this chapter by reference in an ordinance, but is not required to do so. 
4.22 	Nothing in this chapter prevents a home rule charter jurisdiction from adopting another 
4.23 	voting method in its charter.
4.24 	(d) Ranked-choice voting must only be used to elect local offices at a general or special 
4.25 	election, or at a primary election which serves as a party-nominating election for a partisan 
4.26 	office. A primary election must not be held for any nonpartisan offices that are elected using 
4.27 	ranked-choice voting.
4.28 	(e) A jurisdiction that adopts the use of ranked-choice voting in local elections must do 
4.29 	so no later than 30 days before the first day for filing affidavits of candidacy for the office 
4.30 	for which ranked-choice voting is to be used as the method of election.
5.1 	(f) Repeal of ranked-choice voting must be no later than 30 days before the first day for 
5.2 	filing affidavits of candidacy for offices for which ranked-choice voting is used as the 
5.3 	method of election.
5.4 	(g) The local election official must notify the secretary of state and, if applicable, the 
5.5 	county auditor within 30 days following adoption or repeal of ranked-choice voting.

5.6 	Sec. 4. [204E.04] BALLOTS.
5.7 		Subdivision 1.Ballot format. (a) If there are three or more qualified candidates, a ballot 
5.8 	must allow a voter to rank at least three candidates for each office in order of preference 
5.9 	and must also allow the voter to add write-in candidates.
5.10 	(b) A ballot must:
5.11 	(1) include instructions to voters that clearly indicate how to mark the ballot;
5.12 	(2) include instructions to voters that clearly indicate how to rank candidates in order 
5.13 	of the voter's preference; and
5.14 	(3) indicate the number of seats to be elected for each office.
5.15 	(c) A jurisdiction may use ballots compatible with alphanumeric character recognition 
5.16 	voting equipment.
5.17 		Subd. 2.Mixed-election method ballots. If elections are held in which ranked-choice 
5.18 	voting is used in addition to other methods of voting, the ranked-choice voting and 
5.19 	non-ranked-choice voting elections must be on the same ballot card if possible, with 
5.20 	ranked-choice voting and non-ranked-choice voting portions clearly separated on the ballot 
5.21 	card. A separate ballot card may be used if necessary. A jurisdiction may deviate from the 
5.22 	standard ballot order of offices to allow separation of ranked-choice voting and 
5.23 	non-ranked-choice voting elections.
5.24 		Subd. 3.Ballot format rules. The local election official must establish administrative 
5.25 	rules for ballot format after a voting mechanism has been selected, consistent with this 
5.26 	section.

5.27 	Sec. 5. [204E.05] RANKED-CHOICE VOTING TABULATION CENTER.
5.28 		Subdivision 1.Tabulation of votes; generally. The local election official must designate 
5.29 	one location to serve as the ranked-choice voting tabulation center. If the tabulation includes 
5.30 	a manual count of physical ballots, the center must be accessible to the public for the purpose 
6.1 	of observing the vote tabulation. Tabulation of votes must be conducted as described in 
6.2 	section 204E.06.
6.3 		Subd. 2.Precinct tabulation. When the hours for voting have ended and all voting has 
6.4 	concluded, the election judges in each precinct must record and publicly declare the number 
6.5 	of first choices cast for each candidate in that precinct. The election judges must then securely 
6.6 	transfer all electronic voting data and ballots from the precinct to the ranked-choice voting 
6.7 	tabulation center designated under this section. Upon receipt at the ranked-choice voting 
6.8 	tabulation center, all electronic voting data and ballots must be secured.
6.9 		Subd. 3.Notice of recess in count. In the event the tabulation of the ballots is conducted 
6.10 	manually, at any time following receipt of materials under subdivision 1, the local election 
6.11 	official may declare a recess. Notice of the recess must include the date, time, and location 
6.12 	at which the process of recording and tabulating votes will resume and the reason for the 
6.13 	recess. Notice must be posted on the city's official bulletin board and on the door of the 
6.14 	ranked-choice voting tabulation center.
6.15 		Subd. 4.Recording write-in votes. At a time set by the local election official, the 
6.16 	election judges shall convene at the ranked-choice voting tabulation center to examine 
6.17 	ballots on which voters have indicated a write-in choice, and record the names and number 
6.18 	of votes received by each write-in candidate. In the event that votes cast for the write-in 
6.19 	category are not eliminated as provided in section 204E.06, the results must be entered into 
6.20 	the ranked-choice voting tabulation software.
6.21 		Subd. 5.Ranked-choice vote tabulation. After all votes have been recorded, and at a 
6.22 	time set by the local election official, the process of tabulating votes cast for offices to be 
6.23 	elected using the ranked-choice method must begin. The counting must continue until 
6.24 	preliminary results for all races are determined, subject to subdivision 3.

6.25 	Sec. 6. [204E.06] TABULATION OF VOTES.
6.26 	(a) Tabulation of votes must proceed in rounds for each office to be counted. The 
6.27 	threshold must be calculated and publicly declared. Each round must proceed sequentially 
6.28 	as follows:
6.29 	(1) the number of votes cast for each candidate for the current round must be counted. 
6.30 	If the number of candidates whose vote totals equal or exceed the threshold are equal to the 
6.31 	number of seats to be filled, those candidates who are continuing candidates are elected and 
6.32 	the tabulation is complete. If the number of candidates whose vote totals are equal to or 
7.1 	greater than the threshold is not equal to the number of seats to be filled, a new round begins 
7.2 	and the tabulation must continue as provided in the remainder of this paragraph;
7.3 	(2) surplus votes for any candidates whose vote totals are equal to or greater than the 
7.4 	threshold must be calculated;
7.5 	(3) after any surplus votes are calculated but not yet transferred, all candidates for whom 
7.6 	it is mathematically impossible to be elected must be defeated by batch elimination. Votes 
7.7 	for the defeated candidates must be transferred to each ballot's next-ranked continuing 
7.8 	candidate, and the tabulation process reiterates beginning with clause (2). If no candidate 
7.9 	can be defeated mathematically, the tabulation must continue as described in clause (4);
7.10 	(4) the transfer value of each vote cast for an elected candidate must be transferred to 
7.11 	the next continuing candidate on that ballot. Of the candidates whose vote totals reach or 
7.12 	exceed the threshold, the candidate with the largest surplus is declared elected and that 
7.13 	candidate's surplus is transferred. A tie between two or more candidates must immediately 
7.14 	and publicly be resolved by lot by the local election official at the tabulation center. The 
7.15 	surplus of the candidate chosen by lot must be transferred before other transfers are made. 
7.16 	The result of the tie resolution must be recorded and reused in the event of a recount. If no 
7.17 	candidate has a surplus, the tabulation must continue as described in clause (5); otherwise, 
7.18 	the tabulation process must reiterate beginning with clause (2);
7.19 	(5) if there are no transferable surplus votes, the candidate with the fewest votes is 
7.20 	defeated. Votes for the defeated candidate must be transferred to each ballot's next-ranked 
7.21 	continuing candidate. Ties between candidates with the fewest votes must be decided by 
7.22 	lot, and the candidate chosen by lot must be defeated. The result of the tie resolution must 
7.23 	be recorded and reused in the event of a recount. The tabulation process must reiterate 
7.24 	beginning with clause (2); and
7.25 	(6) the procedures in clauses (2) to (5) must be repeated until the number of candidates 
7.26 	whose vote totals are equal to or exceed the threshold is equal to the number of seats to be 
7.27 	filled, or until the number of continuing candidates is equal to the number of offices yet to 
7.28 	be elected. If the number of continuing candidates is equal to the number of offices yet to 
7.29 	be elected, the remaining continuing candidates must be declared elected. In the case of a 
7.30 	tie between two continuing candidates, the tie must be decided by lot as provided in section 
7.31 	204C.34, and the candidate chosen by lot must be defeated. The result of the tie resolution 
7.32 	must be recorded and reused in the event of a recount.
7.33 	(b) When a single skipped ranking is encountered on a ballot, that ballot must count 
7.34 	toward the next nonskipped ranking. If any ballot cannot be advanced because no further 
8.1 	candidates are ranked on that ballot, because a voter has skipped more than one ranking, or 
8.2 	because an undervote, overvote, or duplicate ranking is encountered, the ballot must not 
8.3 	count toward any candidate in that round or in subsequent rounds for the office being 
8.4 	counted.

8.5 	Sec. 7. [204E.07] REPORTING RESULTS.
8.6 	(a) Each precinct must print a precinct summary statement, which must include the 
8.7 	number of first choices cast for each candidate in that precinct.
8.8 	(b) The local election official must provide a summary statement with the following 
8.9 	information: total votes cast; number of undervotes; number of totally defective and spoiled 
8.10 	ballots; threshold calculation; total first choice rankings for all candidates; round-by-round 
8.11 	tabulation results, including simultaneous batch eliminations, surplus transfers if applicable, 
8.12 	and defeated candidate transfers; and exhausted ballots at each round.
8.13 	(c) In jurisdictions where ballots are scanned and recorded electronically, the local 
8.14 	election official must provide an electronically available spreadsheet of the cast vote record.
8.15 	(d) The election abstract must include the information required in the ranked-choice 
8.16 	voting tabulation center summary statement, with the addition of the number of registered 
8.17 	voters by precinct, the number of same-day voter registrations, and the number of absentee 
8.18 	voters.

8.19 	Sec. 8. [204E.08] RECOUNTS.
8.20 	(a) A candidate defeated in the final round of tabulation may request a recount as provided 
8.21 	in section 204C.35 or 204C.36.
8.22 	(b) A candidate defeated in the final round of tabulation when the vote difference is 
8.23 	greater than that provided in section 204C.35 or 204C.36 may request a recount at the 
8.24 	candidate's own expense. A candidate defeated in an earlier round of tabulation may request 
8.25 	a recount at the candidate's own expense. The candidate is responsible for all expenses 
8.26 	associated with the recount, regardless of the vote difference between the candidates in the 
8.27 	round in which the requesting candidate was defeated. The requesting candidate shall file 
8.28 	with the filing officer a bond, cash, or surety in an amount set by the filing officer for the 
8.29 	payment of the recount expenses. Expenses must be determined as provided in section 
8.30 	204C.35, subdivision 2, or 204C.36, subdivision 4.
8.31 	(c) Rules adopted by the secretary of state under section 204C.36 for recounts apply to 
8.32 	recounts conducted under this section.

9.1 	Sec. 9. [204E.09] RULES.
9.2 	The secretary of state may adopt rules necessary to implement the requirements and 
9.3 	procedures established by this chapter.

9.4 	ARTICLE 2
9.5 	CONFORMING CHANGES

9.6 	Section 1. Minnesota Statutes 2020, section 204B.27, is amended by adding a subdivision 
9.7 	to read:
9.8 		Subd. 12.Ranked-choice voting training and outreach. Prior to each state primary 
9.9 	and state general election, the secretary of state must conduct outreach and educational 
9.10 	activities to provide voters with impartial information on the process for properly completing 
9.11 	a ranked-choice voting ballot.

9.12 	Sec. 2. Minnesota Statutes 2020, section 204B.34, subdivision 1, is amended to read:
9.13 		Subdivision 1.State elections. At least 15 days before any state primary or state general 
9.14 	election the municipal clerk shall post in the clerk's office a notice stating the offices for 
9.15 	which candidates must be nominated or elected, the location of each polling place in the 
9.16 	municipality, and the hours for voting, and that the election will be conducted using the 
9.17 	ranked-choice voting method. An optional provision of the notice may include municipal 
9.18 	offices for which candidates must be nominated or elected. The county auditor shall post a 
9.19 	similar notice in the auditor's office including information concerning any polling places 
9.20 	in unorganized territory in the county. The governing body of a municipality or county may 
9.21 	publish this notice in addition to posting it. Failure to give the notice required in this section 
9.22 	shall not invalidate a state primary or state general election.

9.23 	Sec. 3. Minnesota Statutes 2020, section 204B.35, subdivision 1, is amended to read:
9.24 		Subdivision 1.Application. All ballots for every election shall be prepared in accordance 
9.25 	with sections 204B.35 to 204B.44 and chapter chapters 204D and 204E, except for voting 
9.26 	machine ballots or as otherwise provided by law.

9.27 	Sec. 4. Minnesota Statutes 2020, section 204C.19, is amended by adding a subdivision to 
9.28 	read:
9.29 		Subd. 4.Ranked-choice voting election. Notwithstanding the requirements of this 
9.30 	section, the votes cast in a ranked-choice voting election must be counted according to the 
9.31 	procedures established in chapter 204E.

10.1 	Sec. 5. Minnesota Statutes 2020, section 204C.21, is amended by adding a subdivision to 
10.2 	read:
10.3 		Subd. 4.Ranked-choice voting election. Notwithstanding the requirements of this 
10.4 	section, the votes cast in a ranked-choice voting election must be counted according to the 
10.5 	procedures established in chapter 204E.

10.6 	Sec. 6. Minnesota Statutes 2020, section 204C.24, subdivision 1, is amended to read:
10.7 		Subdivision 1.Information requirements. Precinct summary statements shall be 
10.8 	submitted by the election judges in every precinct. For all elections, the election judges 
10.9 	shall complete three or more copies of the summary statements, and each copy shall contain 
10.10 	the following information for each kind of ballot:
10.11 	(1) the number of ballots delivered to the precinct as adjusted by the actual count made 
10.12 	by the election judges, the number of unofficial ballots made, and the number of absentee 
10.13 	ballots delivered to the precinct;
10.14 	(2) the number of votes each candidate received or the number of yes and no votes on 
10.15 	each question, the number of undervotes, the number of overvotes, and the number of 
10.16 	defective ballots with respect to each office or question;
10.17 	(3) the number of spoiled ballots, the number of duplicate ballots made, the number of 
10.18 	absentee ballots rejected, and the number of unused ballots, presuming that the total count 
10.19 	provided on each package of unopened prepackaged ballots is correct;
10.20 	(4) the number of individuals who voted at the election in the precinct which must equal 
10.21 	the total number of ballots cast in the precinct, as required by sections 204C.20 and 206.86, 
10.22 	subdivision 1;
10.23 	(5) the number of voters registering on election day in that precinct; and
10.24 	(6) the signatures of the election judges who counted the ballots certifying that all of the 
10.25 	ballots cast were properly piled, checked, and counted; and that the numbers entered by the 
10.26 	election judges on the summary statements correctly show the number of votes cast for each 
10.27 	candidate and for and against each question.; and
10.28 	(7) in the case of a ranked-choice voting election, any additional information required 
10.29 	by section 204E.07.
10.30 	At least two copies of the summary statement must be prepared for elections not held 
10.31 	on the same day as the state elections.

11.1 	Sec. 7. Minnesota Statutes 2020, section 204C.32, subdivision 1, is amended to read:
11.2 		Subdivision 1.County canvass. The county canvassing board shall meet at the county 
11.3 	auditor's office on either the second or third day following the state primary. After taking 
11.4 	the oath of office, the canvassing board shall publicly canvass the election returns delivered 
11.5 	to the county auditor. The board shall complete the canvass by the third day following the 
11.6 	state primary and shall promptly prepare and file with the county auditor a report that states:
11.7 	(a) the number of individuals voting at the election in the county, and in each precinct;
11.8 	(b) the number of individuals registering to vote on election day and the number of 
11.9 	individuals registered before election day in each precinct;
11.10 	(c) for each major political party, the names of the candidates running for each partisan 
11.11 	office and the number of votes received by each candidate in the county and in each precinct;
11.12 	(d) the names of the candidates of each major political party who are nominated; and
11.13 	(e) the number of votes received by each of the candidates for nonpartisan office in each 
11.14 	precinct in the county and the names of the candidates nominated for nonpartisan office.; 
11.15 	and
11.16 	(f) in the case of ranked-choice voting election, any additional information required by 
11.17 	chapter 204E.
11.18 	Upon completion of the canvass, the county auditor shall mail or deliver a notice of 
11.19 	nomination to each nominee for county office voted for only in that county. The county 
11.20 	auditor shall transmit one of the certified copies of the county canvassing board report for 
11.21 	state and federal offices to the secretary of state by express mail or similar service 
11.22 	immediately upon conclusion of the county canvass. The secretary of state shall mail a 
11.23 	notice of nomination to each nominee for state or federal office.

11.24 	Sec. 8. Minnesota Statutes 2020, section 204C.33, subdivision 1, is amended to read:
11.25 		Subdivision 1.County canvass. The county canvassing board shall meet at the county 
11.26 	auditor's office between the third and tenth days following the state general election. After 
11.27 	taking the oath of office, the board shall promptly and publicly canvass the general election 
11.28 	returns delivered to the county auditor. Upon completion of the canvass, the board shall 
11.29 	promptly prepare and file with the county auditor a report which states:
11.30 	(a) the number of individuals voting at the election in the county and in each precinct;
11.31 	(b) the number of individuals registering to vote on election day and the number of 
11.32 	individuals registered before election day in each precinct;
12.1 	(c) the names of the candidates for each office and the number of votes received by each 
12.2 	candidate in the county and in each precinct;
12.3 	(d) the number of votes counted for and against a proposed change of county lines or 
12.4 	county seat; and
12.5 	(e) the number of votes counted for and against a constitutional amendment or other 
12.6 	question in the county and in each precinct.; and
12.7 	(f) in the case of ranked-choice voting election, any additional information required by 
12.8 	chapter 204E.
12.9 	The result of write-in votes cast on the general election ballots must be compiled by the 
12.10 	county auditor before the county canvass, except that write-in votes for a candidate for 
12.11 	federal, state, or county office must not be counted unless the candidate has timely filed a 
12.12 	request under section 204B.09, subdivision 3. The county auditor shall arrange for each 
12.13 	municipality to provide an adequate number of election judges to perform this duty or the 
12.14 	county auditor may appoint additional election judges for this purpose. The county auditor 
12.15 	may open the envelopes or containers in which the voted ballots have been sealed in order 
12.16 	to count and record the write-in votes and must reseal the voted ballots at the conclusion of 
12.17 	this process. The county auditor must prepare a separate report of votes received by precinct 
12.18 	for write-in candidates for federal, state, and county offices who have requested under 
12.19 	section 204B.09 that votes for those candidates be tallied.
12.20 	Upon completion of the canvass, the county canvassing board shall declare the candidate 
12.21 	duly elected who received the highest number of votes for each county and state office voted 
12.22 	for only within the county. The county auditor shall transmit a certified copy of the county 
12.23 	canvassing board report for state and federal offices to the secretary of state by messenger, 
12.24 	express mail, or similar service immediately upon conclusion of the county canvass.

12.25 	Sec. 9. Minnesota Statutes 2020, section 204C.33, subdivision 3, is amended to read:
12.26 		Subd. 3.State canvass. The State Canvassing Board shall meet at a public meeting 
12.27 	space located in the Capitol complex area on the third Tuesday following the state general 
12.28 	election to canvass the certified copies of the county canvassing board reports received from 
12.29 	the county auditors and shall prepare a report that states:
12.30 	(1) the number of individuals voting in the state and in each county;
12.31 	(2) the number of votes received by each of the candidates, specifying the counties in 
12.32 	which they were cast; and
13.1 	(3) the number of votes counted for and against each constitutional amendment, specifying 
13.2 	the counties in which they were cast.; and
13.3 	(4) any additional information required by chapter 204E.
13.4 	All members of the State Canvassing Board shall sign the report and certify its 
13.5 	correctness. The State Canvassing Board shall declare the result within three days after 
13.6 	completing the canvass.

13.7 	Sec. 10. Minnesota Statutes 2020, section 204D.08, subdivision 4, is amended to read:
13.8 		Subd. 4.State partisan primary ballot; party columns. The state partisan primary 
13.9 	ballot shall be headed by the words "State Partisan Primary Ballot." The ballot shall be 
13.10 	printed on white paper. There must be at least three vertical columns on the ballot and each 
13.11 	major political party shall have a separate column headed by the words ".......... Party," 
13.12 	giving the party name. The ballot must be formatted for a ranked-choice voting election 
13.13 	according to rule established by the secretary of state, provided that the ballot format must 
13.14 	clearly distinguish between each major political party by listing the party name. Above the 
13.15 	party names, the following statement shall be printed.
13.16 	"Minnesota Election Law permits you to vote for the candidates of only one political 
13.17 	party in a state partisan primary election."
13.18 	If there are only two major political parties to be listed on the ballot, one party must 
13.19 	occupy the left-hand column, the other party must occupy the right-hand column, and the 
13.20 	center column The ballot must contain the following statement:
13.21 	"Do not vote for candidates of more than one party."
13.22 	The names of the candidates seeking the nomination of each major political party shall 
13.23 	be listed in that party's column under that party's name. If only one individual files an 
13.24 	affidavit of candidacy seeking the nomination of a major political party for an office, the 
13.25 	name of that individual shall be placed on the state partisan primary ballot at the appropriate 
13.26 	location in that party's column under that party's name.
13.27 	In each column Within each party, the candidates for senator in Congress shall be listed 
13.28 	first, candidates for representative in Congress second, candidates for state senator third, 
13.29 	candidates for state representative fourth and then candidates for state office in the order 
13.30 	specified by the secretary of state.
13.31 	The party columns typeface used for each party shall be substantially the same in width, 
13.32 	type, and appearance. The columns parties shall be separated by a 12-point solid line.

14.1 	Sec. 11. Minnesota Statutes 2020, section 204D.08, subdivision 5, is amended to read:
14.2 		Subd. 5.Party columns; arrangement. The names of candidates for nomination of the 
14.3 	major political party that received the smallest average vote at the last state general election 
14.4 	must be placed in the first column on the left side of the ballot, or in the first position of the 
14.5 	ballot. The names of candidates for nomination of the major political party that received 
14.6 	the next smallest average vote at the last state general election must be placed in the second 
14.7 	column, or the second position on the ballot, and so on. The average vote shall be computed 
14.8 	in the manner provided in section 204D.13, subdivision 2.

14.9 	Sec. 12. Minnesota Statutes 2020, section 204D.10, subdivision 1, is amended to read:
14.10 		Subdivision 1.Partisan offices; nominees. The candidate for nomination of a major 
14.11 	political party for a partisan office on the state partisan primary ballot who receives the 
14.12 	highest number of votes according to the tabulation procedure established in chapter 204E
14.13 	shall be the nominee of that political party for that office.

14.14 	Sec. 13. Minnesota Statutes 2020, section 204D.10, subdivision 3, is amended to read:
14.15 		Subd. 3.Nonpartisan offices; nominees. The candidates for each office on the state 
14.16 	and county nonpartisan primary ballot receiving the highest and the next highest number 
14.17 	of votes according to the tabulation procedure established in chapter 204E shall be the 
14.18 	nominees for that office. When more than one individual is to be elected to the same 
14.19 	nonpartisan office, the number of nominees shall be equal to twice the number of individuals 
14.20 	to be elected, and that number of candidates receiving the highest number of votes shall be 
14.21 	the nominees for that office.

14.22 	Sec. 14. Minnesota Statutes 2020, section 204D.11, subdivision 1, is amended to read:
14.23 		Subdivision 1.State general election ballot; rules. The names of the candidates for all 
14.24 	state and federal offices, all proposed constitutional amendments, all county offices and 
14.25 	questions, and all judicial offices voted on at the state general election shall be placed on a 
14.26 	single ballot that shall be known as the "state general election ballot." This ballot shall be 
14.27 	prepared by the county auditor subject to the requirements of chapter 204E and the rules of 
14.28 	the secretary of state. The secretary of state shall adopt rules for preparation and time of 
14.29 	delivery of the state general election ballot.

15.1 	Sec. 15. Minnesota Statutes 2020, section 205.13, subdivision 2, is amended to read:
15.2 		Subd. 2.Notice of filing dates. At least two weeks before the first day to file affidavits 
15.3 	of candidacy, the municipal clerk shall publish a notice stating the first and last dates on 
15.4 	which affidavits of candidacy may be filed in the clerk's office and the closing time for 
15.5 	filing on the last day for filing. The clerk shall post a similar notice at least ten days before 
15.6 	the first day to file affidavits of candidacy. The notice must indicate the method of election 
15.7 	to be used for the offices on the ballot. The notice must separately list any office for which 
15.8 	affidavits of candidacy may be filed to fill the unexpired portion of a term when a special 
15.9 	election is being held to fill a vacancy as provided in section 412.02, subdivision 2a.

15.10 	Sec. 16. Minnesota Statutes 2020, section 206.58, subdivision 1, is amended to read:
15.11 		Subdivision 1.Municipalities. (a) The governing body of a municipality, at a regular 
15.12 	meeting or at a special meeting called for the purpose, may provide for the use of an 
15.13 	electronic voting system in one or more precincts and at all elections in the precincts, subject 
15.14 	to approval by the county auditor. The governing body shall disseminate information to the 
15.15 	public about the use of a new voting system at least 60 days prior to the election and shall 
15.16 	provide for instruction of voters with a demonstration voting system in a public place for 
15.17 	the six weeks immediately prior to the first election at which the new voting system will be 
15.18 	used.
15.19 	(b) No system may be adopted or used unless it has been approved by the secretary of 
15.20 	state pursuant to section 206.57.
15.21 	(c) The governing body of a municipality may provide for the use of an electronic voting 
15.22 	system that has been approved by the secretary of state under section 206.57 but includes 
15.23 	an automatic tabulating equipment reallocation feature that has not been approved by the 
15.24 	secretary of state if the municipal clerk certifies to the secretary of state, within 30 days 
15.25 	from the date of adoption under paragraph (a), that the reallocation feature:
15.26 	(1) has been certified as required under section 206.57, subdivision 6; and
15.27 	(2) meets the municipality's ordinance requirements for electronic voting systems.

15.28 	Sec. 17. [206.802] ELECTRONIC VOTING SYSTEMS; PURCHASING.
15.29 	Any new voting system purchased for use in Minnesota for the purpose of replacing a 
15.30 	voting system must have the ability to:
15.31 	(1) capture, store, and publicly report ballot data;
16.1 	(2) to the extent practicable, produce a single human-readable file for each contest on 
16.2 	the ballot containing all cast vote records captured for that contest;
16.3 	(3) keep data anonymous;
16.4 	(4) accept ranked or cumulative voting data under a variety of tabulation rules;
16.5 	(5) be programmable to follow all other specifications of the ranked-choice voting system 
16.6 	as provided in chapter 204E;
16.7 	(6) provide a minimum of three rankings for ranked-choice voting elections;
16.8 	(7) to the extent practicable, notify voters of the following errors: overvotes, skipped 
16.9 	rankings, and duplicate rankings in a ranked-choice voting election; and
16.10 	(8) be programmable to print a zero tape indicating all rankings for all candidates in a 
16.11 	ranked-choice voting election.

16.12 	EFFECTIVE DATE. This section is effective upon certification by the secretary of 
16.13 	state that equipment meeting the standards required by this section is available for purchase 
16.14 	and implementation.

16.15 	Sec. 18. Minnesota Statutes 2020, section 206.83, is amended to read:
16.16 	206.83 TESTING OF VOTING SYSTEMS.
16.17 	(a) Within 14 days before election day, the official in charge of elections shall have the 
16.18 	voting system tested to ascertain that the system will correctly mark ballots using all methods 
16.19 	supported by the system, including ranked-choice voting if applicable, and through assistive 
16.20 	technology, and count the votes cast for all candidates and on all questions. Public notice 
16.21 	of the time and place of the test must be given at least two days in advance by publication 
16.22 	once in official newspapers. The test must be observed by at least two election judges, who 
16.23 	are not of the same major political party, and must be open to representatives of the political 
16.24 	parties, candidates, the press, and the public. The test must be conducted by (1) processing 
16.25 	a preaudited group of ballots punched or marked to record a predetermined number of valid 
16.26 	votes for each candidate and on each question, and must include for each office one or more 
16.27 	ballot cards which have votes in excess of the number allowed by law in order to test the 
16.28 	ability of the voting system tabulator and electronic ballot marker to reject those votes; and 
16.29 	(2) processing an additional test deck of ballots marked using the electronic ballot marker 
16.30 	for the precinct, including ballots marked using the electronic ballot display, audio ballot 
16.31 	reader, and any assistive voting technology used with the electronic ballot marker. If an 
17.1 	election is to be conducted using ranked-choice voting, the equipment must also be tested 
17.2 	to ensure that each ranking for each candidate is recorded properly.
17.3 	(b) If any error is detected, the cause must be ascertained and corrected and an errorless 
17.4 	count must be made before the voting system may be used in the election.
17.5 	(c) After the completion of the test, the programs used and ballot cards must be sealed, 
17.6 	retained, and disposed of as provided for paper ballots.

17.7 	Sec. 19. Minnesota Statutes 2020, section 206.89, subdivision 2, is amended to read:
17.8 		Subd. 2.Selection for review; notice.  At the canvass of the state primary, the county 
17.9 	canvassing board in each county must set the date, time, and place for the postelection 
17.10 	review of the state general election to be held under this section. In jurisdictions where 
17.11 	ranked-choice voting is used, the date, time, and place for postelection review must be set 
17.12 	by the local election official at least 30 days before the election. The postelection review 
17.13 	must not begin before the 11th day after the state general election and must be complete no 
17.14 	later than the 18th day after the state general election.
17.15 	At the canvass of the state general election, the county canvassing boards must select 
17.16 	the precincts to be reviewed by lot. The ballots to be reviewed for a precinct include both 
17.17 	the ballots counted at the polling place for that precinct and the absentee ballots counted 
17.18 	centrally by a ballot board for that precinct. The county canvassing board of a county with 
17.19 	fewer than 50,000 registered voters must conduct a postelection review of a total of at least 
17.20 	two precincts. The county canvassing board of a county with between 50,000 and 100,000 
17.21 	registered voters must conduct a review of a total of at least three precincts. The county 
17.22 	canvassing board of a county with over 100,000 registered voters must conduct a review 
17.23 	of a total of at least four precincts, or three percent of the total number of precincts in the 
17.24 	county, whichever is greater. At least one precinct selected in each county must have had 
17.25 	more than 150 votes cast at the general election.
17.26 	The county auditor must notify the secretary of state of the precincts that have been 
17.27 	chosen for review and the time and place the postelection review for that county will be 
17.28 	conducted, as soon as the decisions are made. If the selection of precincts has not resulted 
17.29 	in the selection of at least four precincts in each congressional district, the secretary of state 
17.30 	may require counties to select by lot additional precincts to meet the congressional district 
17.31 	requirement. The secretary of state must post this information on the office website.

18.1 	Sec. 20. Minnesota Statutes 2020, section 206.89, subdivision 3, is amended to read:
18.2 		Subd. 3.Scope and conduct of review.  The county canvassing board shall appoint the 
18.3 	postelection review official as defined in subdivision 1. The postelection review must be 
18.4 	conducted of the votes cast for president or governor; United States senator; and United 
18.5 	States representative. In jurisdictions where ranked-choice voting is used, the review must 
18.6 	also include at least one single-seat ranked-choice voting election and at least one 
18.7 	multiple-seat ranked-choice voting election, if such an election occurred. A postelection 
18.8 	review of a ranked-choice voting election must be conducted for elections decided most 
18.9 	closely in the final round, by percentage. The same requirement applies in jurisdictions 
18.10 	where ranked-choice voting is used in odd-year elections. The postelection review official 
18.11 	may conduct postelection review of the votes cast for additional offices.
18.12 	The postelection review must be conducted in public at the location where the voted 
18.13 	ballots have been securely stored after the state general election or at another location chosen 
18.14 	by the county canvassing board. The postelection review official for each precinct selected 
18.15 	must conduct the postelection review and may be assisted by election judges designated by 
18.16 	the postelection review official for this purpose. The party balance requirement of section 
18.17 	204B.19 applies to election judges designated for the review. The postelection review must 
18.18 	consist of a manual count of the ballots used in the precincts selected and must be performed 
18.19 	in the manner provided by section 204C.21. The postelection review must be conducted in 
18.20 	the manner provided for recounts under section 204C.361 to the extent practicable, and 
18.21 	where ranked-choice voting is used, must include testing of the accumulation software using 
18.22 	stored electronic data for those precincts that are not reviewed by manual count. The review 
18.23 	must be completed no later than two days before the meeting of the state canvassing board 
18.24 	to certify the results of the state general election.

18.25 	Sec. 21. Minnesota Statutes 2020, section 207A.12, is amended to read:
18.26 	207A.12 CONDUCTING PRESIDENTIAL NOMINATION PRIMARY.
18.27 	(a) Except as otherwise provided by law, the presidential nomination primary must be 
18.28 	conducted, and the results canvassed and returned, using the ranked-choice voting method 
18.29 	provided in chapter 204E, in the manner provided by law for the state primary.
18.30 	(b) An individual seeking to vote at the presidential nomination primary must be 
18.31 	registered to vote pursuant to section 201.054, subdivision 1. The voter must request the 
18.32 	ballot of the party for whose candidate the individual wishes to vote. Notwithstanding section 
18.33 	204C.18, subdivision 1, the election judge must record in the polling place roster the name 
18.34 	of the political party whose ballot the voter requested. When posting voter history pursuant 
19.1 	to section 201.171, the county auditor must include the name of the political party whose 
19.2 	ballot the voter requested. The political party ballot selected by a voter is private data on 
19.3 	individuals as defined under section 13.02, subdivision 12, except as provided in section 
19.4 	201.091, subdivision 4a.
19.5 	(c) Immediately after the state canvassing board declares the results of the presidential 
19.6 	nomination primary, the secretary of state must notify the chair of each party of the results.
19.7 	(d) The results of the presidential nomination primary must bind the election of delegates 
19.8 	in each party.

19.9 	Sec. 22. Minnesota Statutes 2020, section 208.05, is amended to read:
19.10 	208.05 STATE CANVASSING BOARD.
19.11 	The State Canvassing Board at its meeting on the date provided in section 204C.33 shall 
19.12 	open and canvass the returns made to the secretary of state for presidential electors and 
19.13 	alternates, prepare a statement of the number of votes cast for the persons receiving votes 
19.14 	for these offices, and declare the person or persons receiving the highest number of votes 
19.15 	for each office according to the tabulation procedure established in chapter 204E duly 
19.16 	elected. When it appears that more than the number of persons to be elected as presidential 
19.17 	electors or alternates have the highest and an equal number of votes, the secretary of state, 
19.18 	in the presence of the board shall decide by lot which of the persons shall be declared elected. 
19.19 	The governor shall transmit to each person declared elected a certificate of election, signed 
19.20 	by the governor, sealed with the state seal, and countersigned by the secretary of state.
`;